// src/app/dashboard/DashboardLayout.tsx
import { Sidebar } from "@/app/components/misc/Sidebar";
import React, { useContext } from "react";
import { Metadata } from "next";



export default function DashboardLayout({ children, title, params }: any) {

  return (
    <div className="h-full">
          {children}
    </div>
  );
}
