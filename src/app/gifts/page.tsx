import CardGift from "@/components/CardGift";

export default function Gifts() {
  return (
    <div className="bg-white h-screen w-full items-center flex-col">
      <h1 className="text-offwhite text-8xl bg-terracota text-center max-sm:mt-5 font-modernSymphony">
        Lista de Presentes
      </h1>
      <div className="flex justify-center items-center">
        <CardGift />
      </div>
    </div>
  );
}
