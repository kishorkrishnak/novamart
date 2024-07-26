import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { uid } from "react-uid";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  return (
    <section className="mx-auto px-1 md:px-4 mt-6 max-w-screen-xl gap-1 grid md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return <ProductCard key={uid(product)} product={product} />;
      })}
    </section>
  );
};

export default Products;
