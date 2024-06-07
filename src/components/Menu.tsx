"use client";
import Link from "next/link";
import { List, X } from "phosphor-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  function openMenu() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <Link href="/" className="max-sm:hidden absolute">
        {pathname === "/" ? (
          <Image src={require("../../public/logo.png")} width={100} alt="logo" />
        ) : (
          <Image src={require("../../public/logo-branco.png")} width={100} alt="logo" />
        )}

      </Link>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden fixed z-30">
        {isOpen ? (
          <X color="#005D86" size={32} onClick={openMenu} />
        ) : (
          <List color="#005D86" size={32} onClick={openMenu} />
        )}
      </div>
      <nav className="left-0 top-[35%] ml-4 max-sm:hidden fixed">
        <ul className="text-marinho font-light cursor-pointer">
          <Link href="/">
            <li className="mb-8 hover:font-normal">HOME</li>
          </Link>
          <Link href="/gifts">
            <li className="mb-8 hover:font-normal">LISTA DE PRESENTES</li>
          </Link>
          <Link href="/confirm" onClick={() => setIsOpen(false)}>
            <li className="mb-8 hover:font-normal">CONFIRME SUA PRESENÇA</li>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <li className="mb-8 hover:font-normal">SOBRE A FESTA</li>
          </Link>

        </ul>
      </nav>
      {isOpen && (
        <nav className="left-0 h-screen bg-white z-20 w-3/4 pl-6 mt-[-2rem] fixed">
          <ul className="text-marinho font-light cursor-pointer ">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="mb-8 hover:font-normal mx-20 mt-10">
                <Image src={require("../../public/logo.png")} width={100} alt="logo" />
              </li>
            </Link>
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="mb-8 hover:font-normal">HOME</li>
            </Link>
            <Link href="/gifts" onClick={() => setIsOpen(false)}>
              <li className="mb-8 hover:font-normal">LISTA DE PRESENTES</li>
            </Link>
            <Link href="/confirm" onClick={() => setIsOpen(false)}>
              <li className="mb-8 hover:font-normal">CONFIRME SUA PRESENÇA</li>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <li className="mb-8 hover:font-normal">SOBRE A FESTA</li>
            </Link>

          </ul>
          {/* </motion.div> */}
        </nav>
      )}
    </>
  );
}
