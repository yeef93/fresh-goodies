import React, { useState } from "react";
import Image from "next/image";
import minimize from "@/public/assets/minimize.png";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const modalStyles = isOpen ? { display: "block" } : { display: "none" };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-50"
      style={modalStyles}
    >
      <div
        className="absolute bg-gray-800 bg-opacity-50 inset-0"
        onClick={onClose}
      ></div>
      <div
        className="p-5 bg-white rounded-xl max-w-md relative flex flex-col items-center overflow-y-auto"
        style={{
          height: "80%",
          width: "80%",
          bottom: "10",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button>
          <Image
            src={minimize}
            alt="close"
            width={30}
            height={30}
            onClick={onClose}
          />
        </button>
        <div
          className="flex items-center justify-center mb-4"
          style={{ maxHeight: "50%", maxWidth: "100%" }}
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="max-h-full max-w-full"
            layout="intrinsic"
            objectFit="contain"
            width={400}
            height={400}
          />
        </div>
        <h2 className="text-2xl font-bold text-center mt-4">
          ${product.price}
        </h2>
        <h3 className="text-sm font-semibold text-center mt-2">In 100 grams</h3>
        <div className=" mt-5 flex flex-row p-3 border-2 rounded-lg justify-between gap-10">
          <div className=" flex flex-col justify-center items-center">
            <div>143</div>
            <div className=" text-xs text-gray-500">calorie</div>
          </div>
          <div>
            <div>6.5</div>
            <div className=" text-xs text-gray-500">proteins</div>
          </div>
          <div>
            <div>0.5</div>
            <div className=" text-xs text-gray-500">fats</div>
          </div>
        </div>
        <div className=" mt-5 px-4 flex items-center justify-center gap-4 rounded-full border-2">
          <button onClick={decreaseQuantity}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="border px-2 py-1 border-none "
            min={1}
          />
          <button onClick={increaseQuantity}>+</button>
        </div>
        <div className=" mt-5 p-4 rounded-full bg-black text-white flex flex-row">
          <div>To cart</div>
          <div>${product.price * quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
