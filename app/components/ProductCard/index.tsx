import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProductDetailModal from "../ProductDetailModal";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number; // price per gram
  initialWeight: number; // initial weight in grams
  increment: number; // increment in grams
}

function ProductCard({ imageUrl, name, price, initialWeight, increment }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { addToCart, removeFromCart } = useCart();

  const initialKg = initialWeight / 1000; // convert initial weight from grams to kg
  const [kg, setKg] = useState<number>(initialKg); // initial weight in kg
  const [totalPrice, setTotalPrice] = useState<number>(price * initialWeight); // initial total price

  useEffect(() => {
    setTotalPrice(price * kg * 1000); // update total price when kg changes
  }, [kg, price]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const increaseKg = () => {
    const newKg = Math.round((kg + increment / 1000) * 10) / 10; // rounding to one decimal place
    setKg(newKg);
    addToCart({ name, weight: newKg * 1000, price: price * newKg * 1000, imageUrl });
  };

  const decreaseKg = () => {
    if (kg > increment / 1000) {
      const newKg = Math.round((kg - increment / 1000) * 10) / 10; // ensuring kg doesn't go below increment value
      setKg(newKg);
      if (newKg > 0) {
        addToCart({ name, weight: newKg * 1000, price: price * newKg * 1000, imageUrl });
      } else {
        removeFromCart({ name, weight: newKg * 1000, price: price * newKg * 1000, imageUrl });
      }
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseFloat(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= increment / 1000) {
      setKg(newQuantity);
    }
  };

  return (
    <>
      <div className="rounded-md shadow-md p-4 flex flex-col overflow-hidden bg-[#e5e5e5] hover:bg-white">
        <div
          className="flex justify-center"
          onClick={handleModalOpen}
          style={{ width: "200px", height: "200px" }}
        >
          <Image
            src={imageUrl}
            alt={name}
            className="object-cover mix-blend-multiply bg-transparent w-full aspect-square"
            width={200}
            height={200}
            layout="fixed"
          />
        </div>
        <h2 className="font-bold text-2xl text-center">${totalPrice.toFixed(2)}</h2>
        <div className="text-center">{name}</div>
        <div className="flex justify-center gap-2 mt-4">
          <button
            type="button"
            className="p-3 px-5 font-bold items-center justify-center rounded-full outline-none border-2 border-gray-300 hover:bg-black hover:text-white"
            onClick={decreaseKg}
          >
            -
          </button>
          <input
            className="rounded-full w-24 text-center border-2 border-gray-300"
            placeholder="1 Kg"
            value={`${kg.toFixed(1)} Kg`}
            onChange={handleQuantityChange}
            readOnly
          />
          <button
            type="button"
            className="p-3 px-5 font-bold items-center justify-center rounded-full outline-none border-2 border-gray-300 hover:bg-black hover:text-white"
            onClick={increaseKg}
          >
            +
          </button>
        </div>
      </div>
      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        product={{ name, price, imageUrl }}
      />
    </>
  );
}

export default ProductCard;
