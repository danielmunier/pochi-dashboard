"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import SelectInput from "../misc/SelectInput";
import { getGuildChannels, getGuildConfig, getGuildRoles, updateGuildConfig } from "@/utils/api";
import { GuildContext } from "@/app/context/GuildContext";
import { Channel, Role } from "@/utils/types";

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
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    guildId: null,
    ticketCategory: null,
    entryFormChannel: null,
    rolesMemberApproved: [],
    rolesVerification: [],
  });

  const guildTest = useContext(GuildContext);
  console.log(guildTest)

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

  const fetchGuildData = useCallback(async () => {
    try {
      const [fetchedChannels, guildDataConfig, guildRoles] = await Promise.all([
        getGuildChannels(id),
        getGuildConfig(id),
        getGuildRoles(id),
      ]);

      const categories = fetchedChannels
        .filter((channel: Channel) => channel.type === 4)
        .map((category: Channel) => ({ value: category.id, label: category.name }));
      const channels = fetchedChannels
        .filter((channel: Channel) => channel.type !== 4 && channel.type !== 2)
        .map((channel: Channel) => ({ value: channel.id, label: channel.name }));
      const formattedRoles = guildRoles.map((role: Role) => ({ value: role.id, label: role.name }));

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
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchGuildData();
  }, [id, fetchGuildData]);

  if (loading) {
    return <div className="text-white">Carregando...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <SelectInput
            name="ticketCategory"
            value={formData.ticketCategory || null}
            onChange={(newValue: any) => handleInputChange(newValue, { name: "ticketCategory" })}
            options={categories}
            placeholder="Categoria dos tickets"
          />
          <SelectInput
            name="entryFormChannel"
            value={formData.entryFormChannel || null}
            onChange={(newValue: any) => handleInputChange(newValue, { name: "entryFormChannel" })}
            options={channels}
            placeholder="Canal de aprovação dos formulários"
          />
          <SelectInput
            name="rolesMemberApproved"
            value={formData.rolesMemberApproved}
            onChange={(newValue: any) => handleInputChange(newValue, { name: "rolesMemberApproved" })}
            options={roles}
            placeholder="Cargos para membros aprovados"
            isMulti={true}
          />
          <SelectInput
            name="rolesVerification"
            value={formData.rolesVerification}
            onChange={(newValue: any) => handleInputChange(newValue, { name: "rolesVerification" })}
            options={roles}
            placeholder="Cargos para verificação"
            isMulti={true}
          />
        </div>
        <div className="flex flex-col gap-4">
          {/* Future inputs here */}
      
        </div>
      </div>
      <button type="submit" className="mt-4 p-2 rounded bg-orange-400">
        Enviar
      </button>
    </form>
  );
};
