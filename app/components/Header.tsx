"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="bg-stone-100 px-10 py-2 shadow-md border-b border-stone-300">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src="/images/Logo.png"
            alt="Iqbal Rice Mills (Pvt.) Limited"
            className="h-10"
          />
        </a>
        <nav className="space-x-6">
          <button
            onClick={() => handleNavigation("/")}
            className="text-lg hover:text-red-700"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/shop")}
            className="text-lg hover:text-red-700"
          >
            Shop
          </button>
          <button
            onClick={() => handleNavigation("/cart")}
            className="text-lg bg-stone-700 text-white py-2 px-4 rounded hover:bg-red-800 hover:text-white"
          >
            {" "}
            Cart{" "}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
