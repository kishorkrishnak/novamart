import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../../types/product";
import AddToCart from "./AddToCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative border rounded-lg flex flex-col overflow-hidden"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="p-2 h-32 md:h-56 w-full object-contain scale-100 hover:scale-110 duration-500"
        priority={true}
      />

      <div className="p-4 text-sm md:text-base flex flex-col items-start justify-center gap-1">
        <h2 className="font-bold line-clamp-2">{product.title}</h2>
        <div className="flex items-center">
          <div className="rating rating-sm flex items-center">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400 mb-[3px]"
              defaultChecked={true}
              readOnly
            />
            <span className="ml-1.5">{product.rating.rate}</span>
          </div>
        </div>
        <div className="flex relative overflow-hidden w-28">
          <p className="group-hover:transform group-hover:-translate-x-16 duration-500 text-gray-900 font-bold">
            ${product.price}
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
