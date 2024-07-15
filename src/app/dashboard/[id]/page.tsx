// /dashboard/[guildId]/page.tsx
"use client";

import { fetchGuildChannels, fetchGuildConfig, updateGuildConfig } from "@/utils/api";
import { useEffect, useState } from "react";
import SelectInput from "@/app/components/misc/SelectInput";

export interface FormData {
  guildId: string | null;
  ticketCategoryId?: string | null;
  entryFormChannelId: string | null;
}

const DashboardPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [categories, setCategories] = useState<any[]>([]);
  const [channels, setChannels] = useState<any[]>([]);
  const [formData, setFormData] = useState<FormData>({
    guildId: null,
    ticketCategoryId: null,
    entryFormChannelId: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const fetchedChannels = await fetchGuildChannels(id); // Retorna todos os canais do servidor
        const filteredCategories = fetchedChannels.filter(
          (channel: any) => channel.type === 4
        ); // Filtra para apenas categorias
        const filteredChannels = fetchedChannels.filter(
          (channel: any) => channel.type !== 4 && channel.type !== 2
        ); // Apenas canais

        const guildDataConfig = await fetchGuildConfig(id);
        setChannels(filteredChannels);
        setCategories(filteredCategories);
        setFormData({
          guildId: guildDataConfig.guildId,
          ticketCategoryId: guildDataConfig.ticketCategoryId,
          entryFormChannelId: guildDataConfig.formEntry.formChannelId,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchChannels();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Enviar formData para a API
    const updatedData = await updateGuildConfig(formData)
    console.log(updatedData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
        <SelectInput
          name="ticketCategoryId"
          value={formData.ticketCategoryId || ""}
          onChange={handleInputChange}
          options={categories}
          label="Categoria dos tickets:"
          disabledOptionText="Selecione uma categoria"
        />
        <SelectInput
          name="entryFormChannelId"
          value={formData.entryFormChannelId}
          onChange={handleInputChange}
          options={channels}
          label="Canal de aprovação dos formulários"
          disabledOptionText="Selecione um canal"
        />
        <button type="submit" className="bg-white p-2 rounded text-black">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default DashboardPage;
