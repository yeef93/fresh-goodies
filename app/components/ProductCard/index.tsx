import React, { useState } from "react";
import Image from "next/image";
import ProductDetailModal from "../ProductDetailModal";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
}

function ProductCard({ imageUrl, name, price }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  return (
    <>
      <div className="rounded-md shadow-md p-4 flex flex-col overflow-hidden" onClick={handleModalOpen}>
        <div
          className="flex justify-center"
          style={{ width: "200px", height: "200px" }}
        >
          <Image
            src={imageUrl}
            alt={name}
            className="object-cover mix-blend-multiply bg-transparent"
            width={200}
            height={200}
            layout="fixed"
          />
        </div>
        <h2 className="font-bold text-2xl text-center">${price}</h2>
        <div className="text-center">{name}</div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            className="p-3 items-center justify-center rounded-full outline-none border-2 hover:bg-black hover:text-white"
            onClick={decreaseKg}
          >
            -
          </button>
          <input
            className="rounded-full w-16 text-center"
            placeholder="1 Kg"
            value={`${kg.toFixed(1)} Kg`}
            readOnly
          />
          <button
            type="button"
            className="p-3 items-center justify-center rounded-full outline-none border-2 hover:bg-black hover:text-white"
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
