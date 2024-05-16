import React from 'react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 max-w-md w-full rounded-md">
        <button className="absolute top-4 right-4" onClick={onClose}>
          Close
        </button>
        <div className="flex justify-center">
          <img src={product.imageUrl} alt={product.name} className="h-40 w-auto" />
        </div>
        <h2 className="text-2xl font-bold text-center mt-4">${product.price}</h2>
        <h3 className="text-xl font-semibold text-center mt-2">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductDetailModal;
