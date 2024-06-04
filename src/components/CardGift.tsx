import listGift from "@/data/listGift";
import Image from "next/image";
import Link from "next/link";

export default function CardGift() {
  return (
    <div className="text-telha w-[70%] h-auto flex flex-wrap gap-4 my-4 ml-24">
      {listGift.map((item) => (
        <div
          key={item.id}
          className="border p-4 flex flex-col justify-center items-center gap-7"
        >
          <Image src={item.image} alt={item.resume} height={250} width={200} />
          <div className="max-w-48 min-h-14 max-h-14 text-center">{item.resume}</div>
          <div>{item.value}</div>
          <Link href={item.buy} className="bg-terracota px-6 py-3">
            <p className="text-offwhite">{item.value}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
