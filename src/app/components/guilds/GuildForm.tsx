"use client"

import { useContext, useEffect, useState } from "react";
import SelectInput from "../misc/SelectInput";
import { getGuildChannels, getGuildConfig, getGuildRoles, updateGuildConfig } from "@/utils/api";
import { GuildContext } from "@/app/context/GuildContext";

interface Option {
  value: string;
  label: string;
}

export interface FormData {
  guildId: string | null;
  ticketCategory?: Option | null;
  entryFormChannel: Option | null;
  rolesVerification: Option[];
  rolesMemberApproved: Option[];
}

export const GuildForm = ({ id }: { id: string }) => {
  const [categories, setCategories] = useState<Option[]>([]);
  const [roles, setRoles] = useState<Option[]>([]);
  const [channels, setChannels] = useState<Option[]>([]);
  const [formData, setFormData] = useState<FormData>({
    guildId: null,
    ticketCategory: null,
    entryFormChannel: null,
    rolesMemberApproved: [],
    rolesVerification: [],
  });

  const guildTest = useContext(GuildContext)


  const handleInputChange = (
    selectedOptions: Option | Option[] | null,
    { name }: { name: string }
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedOptions,
    }));
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await updateGuildConfig(formData);
    } catch (error) {
      console.error("Erro ao atualizar configuração:", error);
    }
  };


  useEffect(() => {
    const fetchGuildData = async () => {
      try {
        const fetchedChannels = await getGuildChannels(id);
        const categories = fetchedChannels.filter((channel: any) => channel.type === 4).map((category: any) => ({ value: category.id, label: category.name }));
        const channels = fetchedChannels.filter((channel: any) => channel.type !== 4 && channel.type !== 2).map((channel: any) => ({ value: channel.id, label: channel.name }));

        const guildDataConfig = await getGuildConfig(id);
        const guildRoles = await getGuildRoles(id);
        const formattedRoles = guildRoles.map((role: any) => ({ value: role.id, label: role.name }));

        const findLabelById = (id: string, options: Option[]) => {
          const option = options.find(option => option.value === id);
          return option ? option.label : id;
        };

        setRoles(formattedRoles);
        setChannels(channels);
        setCategories(categories);
        setFormData({
          guildId: guildDataConfig.guildId,
          ticketCategory: guildDataConfig.ticketConfig?.ticketCategoryId
            ? { value: guildDataConfig.ticketConfig.ticketCategoryId, label: findLabelById(guildDataConfig.ticketConfig.ticketCategoryId, categories) }
            : null,
          entryFormChannel: guildDataConfig.FormEntry?.formChannelId
            ? { value: guildDataConfig.FormEntry.formChannelId, label: findLabelById(guildDataConfig.FormEntry.formChannelId, channels) }
            : null,
          rolesVerification: guildDataConfig.FormEntry?.rolesVerification.map((roleId: string) => ({ value: roleId, label: findLabelById(roleId, formattedRoles) })) || [],
          rolesMemberApproved: guildDataConfig.FormEntry?.rolesMemberApproved.map((roleId: string) => ({ value: roleId, label: findLabelById(roleId, formattedRoles) })) || [],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchGuildData();
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      {guildTest}
      <div className=" text-white p-6 md:p-12">
        <SelectInput
          name="ticketCategory"
          value={formData.ticketCategory || null}
          onChange={(newValue: any) => handleInputChange(newValue, { name: 'ticketCategory' })}
          options={categories}
          label="Categoria dos tickets:"
        />
        <SelectInput
          name="entryFormChannel"
          value={formData.entryFormChannel || null}
          onChange={(newValue: any) => handleInputChange(newValue, { name: 'entryFormChannel' })}
          options={channels}
          label="Canal de aprovação dos formulários"
        />
        <SelectInput
          name="rolesMemberApproved"
          value={formData.rolesMemberApproved}
          onChange={(newValue: any) => handleInputChange(newValue, { name: 'rolesMemberApproved' })}
          options={roles}
          label="Cargos para membros aprovados"
          isMulti={true}
        />
        <SelectInput
          name="rolesVerification"
          value={formData.rolesVerification}
          onChange={(newValue: any) => handleInputChange(newValue, { name: 'rolesVerification' })}
          options={roles}
          label="Cargos para verificação"
          isMulti={true}
        />
        <button type="submit" className="bg-white p-2 rounded text-black">
          Enviar
        </button>
      </div>
    </form>
  )
}