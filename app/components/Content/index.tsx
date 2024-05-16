"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import notFound from "@/public/products/no-image.png";

interface ContentProps {
  products: Product[];
  categories: string[];
  productGroup: { [key: string]: Product[] };
  activeCategory: string;
}

const fallbackImageUrl = "@/public/products/no-image.png";

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
          <div key={category} className=" p-5 flex flex-col">
            <h1 className=" font-bold text-2xl">{category}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10">
              {productGroup[category].map((item, index) => (
                <div className=" p-2 rounded-md shadow-md p-4" key={index}>
                  <div>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover mix-blend-multiply bg-transparent"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h2 className=" font-bold text-2xl">$ {item.price}</h2>
                  <div className="">{item.name}</div>
                  <div className=" flex text-2xls gap-4">
                    <button
                      type="button"
                      className="p-3 items-center justify-center rounded-full outline-none border-2 hover:bg-black hover:text-white"
                    >
                      -
                    </button>
                    <input
                      className="rounded-full"
                      placeholder="1 Kg"
                    ></input>
                    <button
                      type="button"
                      className="p-3 items-center justify-center rounded-full outline-none border-2 hover:bg-black hover:text-white"
                    >
                        +
                    </button>
                  </div>
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
            <div className=" p-2 rounded-md shadow-md p-4" key={index}>
            <div>
              <Image
                src={item.imageUrl}
                alt={item.name}
                className="object-cover mix-blend-multiply bg-transparent"
                width={200}
                height={200}
              />
            </div>
            <h2 className=" font-bold text-2xl">$ {item.price}</h2>
            <div className="">{item.name}</div>
            <div className=" flex text-2xls gap-4">
              <button
                type="button"
                className="p-3 items-center justify-center rounded-full outline-none border-2 hover:bg-black hover:text-white"
              >
                -
              </button>
              <input
                className="rounded-full"
                placeholder="1 Kg"
              ></input>
              <button
                type="button"
                className="p-3 items-center justify-center rounded-full outline-none border-2 hover:bg-black hover:text-white"
              >
                  +
              </button>
            </div>
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
