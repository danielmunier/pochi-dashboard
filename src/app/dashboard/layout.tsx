// src/app/dashboard/DashboardLayout.tsx
import Sidebar from "@/app/components/misc/sidebar/sidebar";
import React, { useContext } from "react";
import { Metadata } from "next";



export default function DashboardLayout({ children, title, params }: any) {

  return (
    <div className="flex h-full ">
      <Sidebar />
    <div className={`flex-grow gap-2 p-20 `}>
      <main>{children}</main>
    </div>
  </div>
  );
}
