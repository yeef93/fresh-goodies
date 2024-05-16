"use client";

import React from "react";

interface Product {
  category: string;
  name: string;
}

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
  if (!categories || !products || !productGroup) return null; // Add this line to handle undefined data

  const finalProduct = products.filter((product) => {
    if (!activeCategory) return true;
    return product.category === activeCategory;
  });

  const allProductList =
    activeCategory || !productGroup
      ? null
      : categories.map((category) => (
          <div key={category} className="flex flex-col">
            <h1>{category}</h1>
            <div className="grid grid-cols-2 gap-2 mt-10">
              {productGroup[category].map((item, index) => (
                <div className="border border-black p-4" key={index}>
                  <div>Category: {item.category}</div>
                  <div>Name: {item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ));

  return (
    <div>
      {activeCategory ? (
        <div className="grid grid-cols-2 gap-2 mt-10">
          {finalProduct.map((item, index) => (
            <div className="border border-black p-4" key={index}>
              <div>Category: {item.category}</div>
              <div>Name: {item.name}</div>
            </div>
          ))}
        </div>
      ) : (
        allProductList
      )}
    </div>
  );
}

export default Content;
