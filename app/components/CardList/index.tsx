"use client";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import {config} from '@/constants/url';

import Card from "../ProductCard";

function CardList() {
  const [products, setProducts] = useState<Product[]>([]);
  //config.BASE_URL+config.endpoints.products this to get the url of endpoint API 

  useEffect(() => {
    fetch(config.BASE_URL+config.endpoints.products)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" max-w-max  top-0 grid  grid-cols-[1fr,1fr] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          category={product.category}
          metadata={product.metadata}
          weight={product.weight}
        />
      ))}
    </div>
  );
}

export default CardList;
