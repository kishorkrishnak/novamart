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
    <main className="relative py-20 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4">
      <div className="mx-auto max-w-screen-xl gap-12 flex flex-col lg:flex-row justify-between items-center">
        <Image src={product.image} alt="logo" width={500} height={500} />

        <div className="flex flex-col items-start justify-center gap-8">
          <div>
            <h1 className="font-bold text-3xl">{product.title}</h1>
            <p className="font-bold mt-2">${product.price}</p>
          </div>
          <p className="font-medium text-lg">{product.description}</p>
          <QuantitySelector />
          <p className="font-medium text-lg">
            Category: <span className="font-bold">{product.category}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
