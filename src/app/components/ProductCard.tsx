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

      <div className="p-4 text-xs md:text-base">
        <h2 className="font-bold">{product.title}</h2>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span>{product.rating.rate}</span>
        </div>
        <p className="text-gray-900 font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
