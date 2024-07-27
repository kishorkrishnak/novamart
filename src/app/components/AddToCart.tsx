"use client";

import { addToCart } from "@/redux/novaSlice";
import { useAppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="hidden font-medium absolute z20 w-[200px] text-gray-500 hover:text-gray-900 lg:flex items-center gap-1 top-0 transform translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
    >
      add to cart <BsArrowRight />
    </button>
  );
};

export default AddToCart;