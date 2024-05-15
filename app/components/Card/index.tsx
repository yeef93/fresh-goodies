import Image from "next/image";
import { Product } from "@/types/product";

function Card({id, imageUrl, name, price, category, metadata}:Product) {
  return (
        <div className="flex flex-col shadow-md p-2 bg-[#f9f8f6] items-start">
        <div className=" flex items-center">
          <div>
            <Image src={imageUrl} className="object-cover mix-blend-multiply bg-transparent" width={100} height={100} />
          </div>
        </div>
        <h1 className=" font-bold text-2xl">{price}</h1>
        <div>{name}</div>
        <div className=" flex text-2xls gap-4">
          <button className=" p-2 rounded-full bg-white border-solid border-gray-400">
            -
          </button>
          <input className="px-4 rounded-full" placeholder="1 Kg"></input>
          <button className=" p-2 rounded-full bg-white border-solid border-gray-400">
            +
          </button>
        </div>
      </div>
  );
}

export default Card;
