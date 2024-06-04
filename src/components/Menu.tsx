"use client";
import Link from "next/link";
import { List, X } from "phosphor-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <nav className="left-0 top-[40%] ml-4 max-sm:hidden fixed">
        <ul className="text-marinho font-light cursor-pointer">
          <Link href="/">
            <li className="mb-8 hover:font-normal">HOME</li>
          </Link>
          <Link href="/gifts">
            <li className="mb-8 hover:font-normal">LISTA DE PRESENTES</li>
          </Link>
          <li className="mb-8 hover:font-normal">CONFIRME SUA PRESENÇA</li>
          <li className="mb-8 hover:font-normal">LOCAL DA FESTA</li>
        </ul>
      </nav>
      {isOpen && (
        <nav className="absolute left-0 h-screen bg-white z-20 w-3/4 pl-4 mt-10">
          {/* <motion.div
            className="bg-white z-20 w-3/4 pl-4 mt-10"
            // initial={{ y: 10 }}
            // animate={{ y: 0 }}
          > */}
            <ul className="text-marinho font-light cursor-pointer ">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <li className="mb-8 hover:font-normal">HOME</li>
              </Link>
              <Link href="/gifts" onClick={() => setIsOpen(false)}>
                <li className="mb-8 hover:font-normal">LISTA DE PRESENTES</li>
              </Link>
              <li className="mb-8 hover:font-normal">CONFIRME SUA PRESENÇA</li>
              <li className="mb-8 hover:font-normal">LOCAL DA FESTA</li>
            </ul>
          {/* </motion.div> */}
        </nav>
      )}
    </>
  );
}
