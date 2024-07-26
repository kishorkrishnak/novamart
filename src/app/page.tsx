import Products from "./components/Products";
import Hero from "./components/Hero";
import { Suspense } from "react";
import ProductSkeltons from "./components/ProductSkeltons";
export default function Home() {
  return (
    <main className="min-h-[calc(100vh-160px)] pb-20">
      <Hero />

      <div className="flex flex-col items-center justify-center gap-5  px-1 md:px-4 pt-10">
        <h1 className="bg-black text-2xl px-10 py-2 text-white text-center">
          Shopping everyday
        </h1>

        <p className="text-center text-[#4B5563] max-w-screen-sm">
          Revolutionizing your daily life! Our handpicked products aren&apos;t
          just essentials; they&apos;re game-changers. Discover innovation,
          style, and convenience like never before. Elevate your everyday with
          us!
        </p>
      </div>

      <Suspense fallback={<ProductSkeltons />}>
        <Products />
      </Suspense>
    </main>
  );
}
