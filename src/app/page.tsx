import Countdown from "@/components/CountDownTimer";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full justify-start flex flex-col items-center bg-no-repeat max-sm:bg-left">
      <div className="max-sm:flex max-sm:items-start max-sm:w-full max-sm:p-2">
        <Menu />
      </div>
      <div className="text-right z-10 absolute top-10 right-48 tracking-wider max-sm:right-0">
        <div className="text-marinho text-7xl mt-12 mb-9 max-sm:text-4xl font-light">
          GABRIELA &
        </div>
        <div className="text-marinho text-7xl mb-9 max-sm:text-4xl font-light mt-[-30px]">
          VINICIUS
        </div>
      </div>
      <Image
        className="mt-10 max-sm:mt-0"
        src={require("../../public/imageMain.png")}
        alt="imagem principal"
        width={500}
        quality={100}
      ></Image>

      <div className="text-marinho text-xl font-light">
        <Countdown />
      </div>
    </div>
  );
}
