import Products from "./components/Products";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <main className="min-h-[calc(100vh-160px)]">
      <Hero />
      <Products />
    </main>
  );
}
