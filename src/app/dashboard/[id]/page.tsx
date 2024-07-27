"use client";

import { getGuildChannels, getGuildConfig, getGuildRoles, updateGuildConfig } from "../../../utils/api";
import { useEffect, useState } from "react";
import SelectInput from "../../components/misc/SelectInput"
import { GuildForm } from "@/app/components/guilds/GuildForm";

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

const DashboardPage = ({ params }: { params: { id: string } }) => {

  const { id } = params

  return (
    <GuildForm id={id} />
  );
};

export default DashboardPage;
