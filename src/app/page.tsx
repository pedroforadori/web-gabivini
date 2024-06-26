import Countdown from "@/components/CountDownTimer";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full justify-center flex flex-col items-center bg-no-repeat max-sm:bg-left max-sm:mt-[-3rem]">
      {/* <div className="max-sm:flex max-sm:items-start max-sm:w-full max-sm:p-2">
        <Menu />
      </div> */}
      <div className="w-7/12 flex flex-col items-center  max-sm:w-full">
        <div className="text-center max-sm:right-0 max-sm:left-0 z-10">
          <div className="text-marinho text-[10rem] max-lg:text-8xl max-xl:text-9xl max-2xl:text-8xl max-2xl:mb-4 max-lg:mb-4 max-sm:text-8xl max-sm:mb-4 font-modernSymphony">
            Gabriela & Vinicius
          </div>
          <div className="text-marinho text-xs font-light mb-4 text-justify max-sm:my-8 max-sm:mx-12">
            {`"Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. Para onde fores, irei; onde tu repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu será." (Rute 1:16-18)`}
          </div>
        </div>
        <Image
          className="max-sm:mt-0"
          src={require("../../public/imageMain.jpg")}
          alt="imagem principal"
          width={1100}
          quality={100}
        />
      </div>
      <div className="text-marinho text-xl font-light">
        <Countdown />
      </div>
    </div>
  );
}
