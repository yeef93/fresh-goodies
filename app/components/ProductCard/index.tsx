import React, { useState } from "react";
import Image from "next/image";
import ProductDetailModal from "../ProductDetailModal";
import { useCart } from "../../context/CartContext"; 

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
}

function ProductCard({ imageUrl, name, price }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { addToCart } = useCart();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [kg, setKg] = useState<number>(1);
  const [priceBuy, setPrice] = useState<number>(price);

  const increaseKg = () => {
    if (kg < 10) {
      setKg(kg + 0.1);
    } else if (kg < 1000) {
      setKg(kg + 1);
    }
  };

  const decreaseKg = () => {
    if (kg > 0) {
      setKg(kg - 0.1);
    }
  };

  const pricePerKg = () => {
    setPrice(price * (kg * 10));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setKg(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(name, kg);
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
        <h2 className="font-bold text-2xl text-center">${price}</h2>
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
