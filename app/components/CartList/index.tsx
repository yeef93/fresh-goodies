import Image from "next/image";
import shipping from "@/public/assets/shipping.png";

function CartList() {
  return (
    <div className="flex flex-row p-5 rounded-md border-2">
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <Image
            src={shipping}
            alt="shipping"
            className="object-cover mix-blend-multiply bg-transparent"
            width={80}
            height={80}
            layout="fixed"
          />
          <div>Before free shipping</div>
        </div>
        <div className="flex">
          <div className="p-2">
            <Image
              src={shipping}
              alt="shipping"
              className="object-cover mix-blend-multiply bg-transparent"
              width={100}
              height={100}
              layout="fixed"
            />
          </div>
          <div className="ml-4">
            <div className="font-bold">Name</div>
            <div>price</div>
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                className="p-1 px-3 font-bold items-center justify-center rounded-full outline-none border-2 border-gray-300 hover:bg-black hover:text-white"
              >
                -
              </button>
              <input className="w-24 text-center" placeholder="1 Kg" readOnly />
              <button
                type="button"
                className="p-1 px-3 font-bold items-center justify-center rounded-full outline-none border-2 border-gray-300 hover:bg-black hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
