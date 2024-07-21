import React from "react";
import { Product } from "../../types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg flex flex-col gap-4">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        layout="responsive"
        className="w-full h-48 object-cover"
      />

      <div>
        <h2 className="text-base font-bold">{product.title}</h2>
        <p className="text-gray-900">${product.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span>{product.rating.rate}</span>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
