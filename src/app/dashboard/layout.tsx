// src/app/dashboard/DashboardLayout.tsx
import { Sidebar } from "@/components/misc/Sidebar";
import Header from "@/components/misc/Header";
import React, { useContext } from "react";
import { GuildContext } from "../context/GuildContext";
import { Metadata } from "next";



export default function DashboardLayout({ children, title, params }: any) {
 
  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-white">
        <Sidebar />
      </div>

      <div className="bg-gray-900 w-screen">
        <Header title={title} />
        <div className="p-6 md:p-12 overflow-y-auto text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
