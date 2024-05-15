import Image from "next/image";
import { Product } from "@/types/product";

function Card({
  id,
  imageUrl,
  name,
  price,
  category,
  metadata,
  weight,
}: Product) {
  return (
    <div className="flex flex-col shadow-md p-2 bg-[#f9f8f6] items-start">
      <div className="flex items-center">
        <div>
          <Image
            src={imageUrl}
            alt={name}
            className="object-cover mix-blend-multiply bg-transparent"
            width={200}
            height={200}
          />
        </div>
      </div>
      <h1 className=" font-bold text-2xl">$ {price}</h1>
      <div>{name}</div>
      <div className=" flex text-2xls gap-4">
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-600 hover:bg-gray-700 active:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 10h24v4h-24z" />
          </svg>
        </button>
        <input className="px-4 rounded-full" placeholder="1 Kg"></input>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-600 hover:bg-gray-700 active:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            fill="#fff"
            className="inline"
            viewBox="0 0 512 512"
          >
            <path
              d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
              data-original="#000000"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
