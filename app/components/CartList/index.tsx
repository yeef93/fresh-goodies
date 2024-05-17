import React from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import shipping from "@/public/assets/shipping.png";

const CartList = () => {
  const { cart } = useCart();
  const total = cart.items.reduce((acc, item) => acc + item.price, 0);
  const percentageComplete = Math.min((total / 15) * 100, 100);

  return (
    <div className="rounded-md p-4 bg-[#e5e5e5]">
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
        <div className="mt-4 h-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${percentageComplete}%` }}
          ></div>
        </div>
      </div>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.items.map((item, index) => (
          <div key={index} className="flex flex-row p-5 rounded-md mb-4">
            <Image
              src={item.imageUrl}
              alt={item.name}
              className="object-cover mix-blend-multiply bg-transparent"
              width={80}
              height={80}
              layout="fixed"
            />
            <div className="ml-4">
              <div className="font-bold">{item.name}</div>
              <div>${item.price.toFixed(2)}</div>
              <div className="mt-5 flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="p-1 px-3 font-bold items-center justify-center rounded-full outline-none border-2 border-gray-300 hover:bg-black hover:text-white"
                >
                  -
                </button>
                <input
                  className="w-24 text-center"
                  value={`${(item.weight / 1000).toFixed(2)} kg`}
                  readOnly
                />
                <button
                  type="button"
                  className="p-1 px-3 font-bold items-center justify-center rounded-full outline-none border-2 border-gray-300 hover:bg-black hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
