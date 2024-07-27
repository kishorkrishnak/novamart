"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { uid } from "react-uid";
import { useAppSelector } from "@/redux/store";
import ProductSkeltons from "./ProductSkeltons";

const priceRangeMapping: {
  [key: string]: [number | undefined, number | undefined];
} = {
  "Under $50": [0, 50],
  "$50 - $100": [50, 100],
  "$100 - $200": [100, 200],
  "$200 - $500": [200, 500],
  "Over $500": [500, undefined],
};

const Products = () => {
  const selectedCategory = useAppSelector(
    (state) => state.nova.selectedCategory
  );
  const selectedPriceRanges = useAppSelector(
    (state) => state.nova.selectedPriceRanges
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      // Construct the URL based on the selected category
      const categoryParam =
        selectedCategory && selectedCategory !== "All"
          ? `category/${selectedCategory}`
          : "";

      const response = await fetch(
        `https://fakestoreapi.com/products${
          categoryParam ? `/${categoryParam}` : ""
        }`
      );
      const data = await response.json();

      // Filter products based on selected price ranges
      const filteredProducts = data.filter((product: Product) => {
        if (selectedPriceRanges.length === 0) return true; // Include all products if no price range is selected

        const price = product.price;

        return selectedPriceRanges.some((range) => {
          const [minPrice, maxPrice] = priceRangeMapping[range] || [];
          return (
            (minPrice === undefined || price >= minPrice) &&
            (maxPrice === undefined || price <= maxPrice)
          );
        });
      });

      setProducts(filteredProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [selectedCategory, selectedPriceRanges]);

  return (
    <>
      {loading ? (
        <ProductSkeltons />
      ) : (
        <section className="mt-4 gap-1 grid md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={uid(product)} product={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default Products;
