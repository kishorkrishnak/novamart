import Image from "next/image";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

export default function Cart() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      <PageTitle title={"Your Cart"} />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-medium text-2xl text-black">Cart is empty</p>

          <Image
            src="/images/cross.svg"
            alt="logo"
            width={40}
            height={40}
            className="mt-1"
          />
          <p className="font-medium">Go shopping</p>
        </div>
      </div>
    </main>
  );
}
