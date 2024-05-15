"use client";
import { useState, useEffect } from "react";
import Card from "../Card";

function CardList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" top-0 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          category={product.category}
          metadata={product.metadata}
        />
      ))}
    </div>
  );
}

export default CardList;
