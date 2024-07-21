import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { uid } from "react-uid";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 1000 },
  });
  const products: Product[] = await response.json();

  return (
    <section className="flex flex-col items-center justify-center gap-5 py-10 px-4">
      <h1 className="bg-black text-2xl px-10 py-2 text-white">
        Shopping everyday
      </h1>

      <p className="text-center text-[#4B5563] max-w-screen-sm">
        Revolutionizing your daily life! Our handpicked products aren&apos;t
        just essentials; they&apos;re game-changers. Discover innovation, style,
        and convenience like never before. Elevate your everyday with us!
      </p>

      <div className="mt-6 max-w-screen-xl grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return <ProductCard key={uid(product)} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
