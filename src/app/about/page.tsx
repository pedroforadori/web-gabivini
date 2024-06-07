import Countdown from "@/components/CountDownTimer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-white h-screen w-full items-center flex-col">
            <h1 className="text-offwhite text-8xl bg-terracota text-center max-sm:mt-7 font-modernSymphony">
                Sobre a Festa
            </h1>
            <div className="flex justify-end items-center h-[80vh] max-sm:flex max-sm:flex-col-reverse max-sm:justify-around">
                <div className="relative left-40 max-sm:left-0 max-sm:mx-4">
                    <p className="text-marinho font-light">ENDEREÇO: AV. MAL. RONDON, 840 - CENTRO, OSASCO - SP, 06093-010</p>
                    <p className="text-marinho font-light">HORÁRIO: 19:30</p>
                    <p className="text-marinho font-light">TRAJE: SOCIAL COMPLETO</p>
                    <div className="text-marinho text-xs font-light">
                        <Countdown />
                    </div>
                    
                    <Link href={"https://waze.com/ul/h6gydpku04"}>
                        <Image src={require("../../../public/waze.png")} width={50} alt="waze logo" />
                    </Link>
                        
                </div>
                <Image src={require("../../../public/trem.jpeg")} width={1100} alt="trem logo" />
            </div>
        </div>
    )
}