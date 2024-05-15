import Image from "next/image";
import vege from "@/public/products/cucumber.png";

function Card() {
  return (
    <div className=" flex flex-col shadow-md p-2 bg-[#f9f8f6]">
      <div className=" flex items-center">
        <div>
        <Image src={vege} />
        </div>
        
      </div>
      <h1 className=" font-bold">$3.2</h1>
      <div>Cucumber </div>
      <div className=" flex text-2xls gap-4">
        <button className=" p-2 rounded-full bg-white border-solid border-gray-400">-</button>
        <input className="px-2" placeholder="1 Kg"></input>
        <button className=" p-2 rounded-full bg-white border-solid border-gray-400">+</button>
      </div>
    </div>
  );
}

export default Card;
