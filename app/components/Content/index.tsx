"use client";

import React from "react";
import { Product } from "@/types/product";
import ProductCard from "@/app/components/ProductCard";

interface ContentProps {
  products: Product[];
  categories: string[];
  productGroup: { [key: string]: Product[] };
  activeCategory: string;
}

function Content({
  products,
  categories,
  productGroup,
  activeCategory,
}: ContentProps) {
  if (!categories || !products || !productGroup) return null;

  const finalProduct = products.filter((product) => {
    if (!activeCategory) return true;
    return product.category === activeCategory;
  });

  const allProductList =
    activeCategory || !productGroup
      ? null
      : categories.map((category) => (
          <div key={category} className="p-5 flex flex-col">
            <h1 className="font-bold text-2xl">{category}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10">
              {productGroup[category].map((item, index) => (
                <ProductCard
                  key={index}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ));

  return (
    <div>
      {activeCategory ? (
        <div className=" px-4 grid grid-cols-2 md:grid-cols-4 gap-2 mt-10">
          {finalProduct.map((item, index) => (
            <ProductCard
              key={index}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        allProductList
      )}
    </div>
  );
}

export default Content;
