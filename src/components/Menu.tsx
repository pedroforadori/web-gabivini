"use client"
import { List, X } from "phosphor-react";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
        {isOpen ? (
          <X color="#005D86" size={32} onClick={openMenu} />
        ) : (
          <List color="#005D86" size={32} onClick={openMenu} />
        )}
      </div>
      <nav className="absolute left-0 top-[40%] ml-4 max-sm:hidden ">
        <ul className="text-marinho font-light cursor-pointer">
          <li className="mb-8 hover:font-normal">HOME</li>
          <li className="mb-8 hover:font-normal">LISTA DE PRESENTES</li>
          <li className="mb-8 hover:font-normal">CONFIRME SUA PRERSENÇA</li>
          <li className="mb-8 hover:font-normal">LOCAL DA FESTA</li>
        </ul>
      </nav>
      {isOpen && (
        <nav className="absolute left-0 h-screen bg-white z-20 w-3/4 pl-4 mt-10">
          <ul className="text-marinho font-light cursor-pointer ">
            <li className="mb-8 mt-8 hover:font-normal">HOME</li>
            <li className="mb-8 hover:font-normal">LISTA DE PRESENTES</li>
            <li className="mb-8 hover:font-normal">CONFIRME SUA PRERSENÇA</li>
            <li className="mb-8 hover:font-normal">LOCAL DA FESTA</li>
          </ul>
        </nav>
      )}
    </>
  );
}
