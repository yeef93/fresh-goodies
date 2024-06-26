"use client";

import React, { useState } from "react";
import useProduct from "@/hooks/useProduct";
import Navbar from "@/app/components/NavBar";
import Content from "@/app/components/Content";
import CartList from "./components/CartList/index";
import { CartProvider } from "./context/CartContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const { products, categories, productGroup } = useProduct();

  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <div className=" flex flex-row">
        <Navbar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className=" flex flex-row">
        <CartProvider>
          <div>
            <Content
              products={products}
              categories={categories}
              productGroup={productGroup}
              activeCategory={activeCategory}
            />
          </div>
          <div className=" p-10">
            <CartList />
          </div>
        </CartProvider>
      </div>
    </main>
  );
}
