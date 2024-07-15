// src/app/dashboard/DashboardLayout.tsx
import { Sidebar } from "@/app/components/misc/Sidebar";
import Header from "@/app/components/misc/Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
  title: string; // Adicione uma propriedade para o título do cabeçalho
  params: { id: string };
};

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
 
  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-white">
        <Sidebar />
      </div>

      <div className="flex-grow bg-gray-800">
        {/* <Header title={title} /> */}
        <div className="p-6 md:p-12 overflow-y-auto text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
