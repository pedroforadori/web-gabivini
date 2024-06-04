import Countdown from "@/components/CountDownTimer";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full justify-start flex flex-col items-center bg-no-repeat max-sm:bg-left">
      <div className="max-sm:flex max-sm:items-start max-sm:w-full max-sm:p-2">
        <Menu />
      </div>
      <div className="flex flex-col items-center">
        {/* <div className="text-right z-10 relative top-[-2rem] left-24 tracking-wider max-sm:right-0 max-sm:left-0">
          <div className="text-marinho text-[10rem] mt-10 mb-9 max-sm:text-4xl font-modernSymphony">
            Gabriela &
          </div>
          <div className="text-marinho text-[10rem] mb-9 max-sm:text-4xl font-light mt-[-10rem] font-modernSymphony">
            Vinicius
          </div>
        </div> */}
        <div className="text-right max-sm:right-0 max-sm:left-0 z-10">
          <div className="text-marinho text-[10rem] max-sm:text-8xl max-sm:mb-4 font-modernSymphony">
            Gabriela & Vinicius
          </div>
        </div>
        <Image
          className=" max-sm:mt-0"
          src={require("../../public/imageMain.png")}
          alt="imagem principal"
          width={400}
          quality={100}
        />
      </div>
      <div className="text-marinho text-xl font-light">
        <Countdown />
      </div>
    </div>
  );
}
