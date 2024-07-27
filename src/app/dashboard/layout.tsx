// src/app/dashboard/DashboardLayout.tsx
import { Sidebar } from "@/app/components/misc/Sidebar";
import React, { useContext } from "react";
import { Metadata } from "next";



export default function DashboardLayout({ children, title, params }: any) {

  return (
    <div className="flex h-screen">
      <div className=" text-white">
        <Sidebar />
      </div>

      <div className="w-screen">
        <div className="p-6 md:p-12 overflow-y-auto text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
