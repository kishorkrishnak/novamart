"use client";

import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/novaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

const QuantitySelector = ({
  product,
  showAddToCart,
  showQuantityText,
}: {
  product: Product;
  showAddToCart: boolean;
  showQuantityText: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(product.quantity || 1);

  const handleDecrease = () => {
    if (showAddToCart) {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    } else if (quantity > 1) dispatch(decrementQuantity(product.id));
  };

  const handleIncrease = () => {
    if (showAddToCart) {
      setQuantity((prev) => prev + 1);
    } else dispatch(incrementQuantity(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success("Product added to cart");
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="py-3 px-3 bg-white border border-gray-200 rounded-lg">
        <div className="w-full flex justify-between items-center gap-x-5">
          {showQuantityText ? (
            <div className="grow">
              <span className="block text-sm md:text-base text-gray-400">
                Quantity
              </span>
            </div>
          ) : null}
          <div className="flex justify-end items-center gap-x-3">
            <button
              type="button"
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-black hover:text-white outline-none disabled:pointer-events-none duration-200"
              onClick={handleDecrease}
              aria-label="Decrease"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
            </button>
            {quantity}
            <button
              type="button"
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-black hover:text-white outline-none disabled:pointer-events-none duration-200"
              onClick={handleIncrease}
              aria-label="Increase"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showAddToCart ? (
        <button
          onClick={handleAddToCart}
          className="btn btn-neutral text-base text-white px-6"
        >
          Add to cart
        </button>
      ) : null}
    </div>
  );
};

export default QuantitySelector;
