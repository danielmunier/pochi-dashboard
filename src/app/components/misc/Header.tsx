// components/misc/Header.tsx
import React from "react";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      
    </header>
  );
};

export default Header;
