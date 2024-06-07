import Countdown from "@/components/CountDownTimer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-white h-screen w-full items-center flex-col">
            <h1 className="text-offwhite text-8xl bg-terracota text-center max-sm:mt-7 font-modernSymphony">
                Sobre a Festa
            </h1>
            <div className="flex justify-end items-center h-[80vh] max-sm:flex max-sm:flex-col-reverse max-sm:justify-around 
                            max-md:flex max-md:flex-col-reverse max-md:justify-center">
                <div className="relative left-40 max-sm:left-0 max-lg:left-0 max-sm:mx-4
                                max-md:left-0 max-md:w-1/2 
                                max-lg:w-1/3 
                                max-xl:left-20 max-xl:w-2/5
                                max-2xl:left-32 max-2xl:w-2/5">
                    <p className="text-marinho font-light"><span className="font-normal">ENDEREÇO: </span> AV. MAL. RONDON, 840 - CENTRO, OSASCO - SP, 06093-010</p>
                    <p className="text-marinho font-light"><span className="font-normal">HORÁRIO: </span>19:30</p>
                    <p className="text-marinho font-light"><span className="font-normal">TRAJE: </span> SOCIAL COMPLETO</p>
                    <p className="text-marinho font-light">14.12.2024</p>
                    {/* <div className="text-marinho text-xs font-light">
                        <Countdown />
                    </div> */}
                    
                    {/* <Link href={"https://waze.com/ul/h6gydpku04"}>
                        <Image src={require("../../../public/waze.png")} width={50} alt="waze logo" />
                    </Link> */}
                        
                </div>
                <div className="flex flex-col items-center max-md:w-[300px] max-lg:w-[300px] max-xl:w-[400px] max-2xl:w-[600px]">
                    <Image src={require("../../../public/trem-blue.png")} width={800} alt="trem logo" />
                </div>
                
            </div>
        </div>
    )
}