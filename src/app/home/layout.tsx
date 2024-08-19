// src/app/dashboard/DashboardLayout.tsx
import React, { useContext } from "react";
import { Metadata } from "next";
import Nav from "../components/misc/nav";
import Footer from "../components/misc/Footer";



export default function DashboardLayout({ children, title, params }: any) {

  return (
    <div>
      <Nav />

      {children}
      
      <Footer/>
      </div>
  );
}
