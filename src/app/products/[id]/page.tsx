import { Product } from "@/types/product";
import Image from "next/image";
import QuantitySelector from "./QuantitySelector";

interface ProductProps {
  params: {
    id: number;
  };
}

const ProductPage = async ({ params: { id } }: ProductProps) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 1000 },
  });
  const product: Product = await response.json();
  return (
    <main className="relative py-14 md:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4">
      <div className="mx-auto max-w-screen-xl gap-12 flex flex-col lg:flex-row justify-between items-center">
        <Image src={product.image} alt="logo" width={200} height={200}
        className="w-[200px] h-auto md:h-[500px] md:w-[500px]"
        />

        <div className="flex flex-col items-start justify-center gap-8">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">{product.title}</h1>
            <p className="font-bold mt-2 md:text-lg">${product.price}</p>
          </div>
          <p className="font-medium md:text-lg">{product.description}</p>
          <QuantitySelector product={product} showQuantityText showAddToCart />
          <p className="font-medium">
            Category: <span className="font-bold">{product.category}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
