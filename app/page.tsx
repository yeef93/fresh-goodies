"use client";

import React, { useState } from "react";
import useProduct from "@/hooks/useProduct";
import Navbar from "@/app/components/NavBar";
import Content from "@/app/components/Content";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const { products, categories, productGroup } = useProduct();

  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Content
        products={products}
        categories={categories}
        productGroup={productGroup}
        activeCategory={activeCategory}
      />
    </main>
  );
}
