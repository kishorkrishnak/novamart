import React from "react";
import { Product } from "../../types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border rounded-lg flex flex-col overflow-hidden"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="p-2 h-32 md:h-56 w-full object-contain scale-100 hover:scale-110 duration-300"
      />

      <div className="p-4 text-sm md:text-base flex flex-col items-start justify-center gap-1">
        <h2 className="font-bold line-clamp-2">{product.title}</h2>
        <div className="flex items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          <span className="ml-1">{product.rating.rate}</span>
    
          </div>
        </div>
        <p className="text-gray-900 font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
