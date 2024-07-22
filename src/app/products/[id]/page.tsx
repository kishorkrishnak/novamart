import PageTitle from "@/app/components/PageTitle";
import { Product } from "@/types/product";
import Image from "next/image";

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
    <main className="relative py-20 flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      <PageTitle title={"Product"} />

      <div className="mx-auto max-w-screen-xl gap-10 flex justify-between items-center">
        <Image src={product.image} alt="logo" width={500} height={500} />

        <div className="flex flex-col items-start justify-center gap-8">
          <div>
            <h1 className="font-bold text-3xl">{product.title}</h1>
            <p className="font-bold">${product.price}</p>
          </div>
          <p className="font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
            magni facili blanditiis molestias soluta eveniet illum accusantium
            eius mollitia eligendi, ex iste doloribus magnam.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="btn btn-neutral text-base text-white px-6">
              Add to cart
            </button>
          </div>

          <p className="font-medium text-lg">
            Category: <span className="font-bold">{product.category}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
