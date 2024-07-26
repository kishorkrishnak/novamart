import Image from "next/image";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

export default function Cart() {
  return (
    <main className="py-20 relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-2">
      <PageTitle title={"Your Cart"} />

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-around w-full">
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

        <div className="w-full md:w-[400px] bg-[#FAFAFA] py-6 px-3">
          <h1 className="text-2xl font-bold">Cart totals</h1>
          <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
            <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Subtotal</p>
              <p className="font-bold">$ 0.00</p>
            </div>

            <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Shipping</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi hic.
              </p>
            </div>
          </div>

          <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
            <div className="w-full text-lg font-medium flex items-start justify-between gap-3">
              <p>Total</p>
              <p className=" text-xl font-bold">$ 0.00</p>
            </div>
            <button className="btn btn-neutral text-base text-white px-6 w-full">
              Proceed to checkout
            </button>
          </div>


          
          <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
              <p className="font-semibold">Demo data</p>
              <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Card info.</p>
              <p className="font-bold">4111 1111 1111 1111</p>
            </div>  <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Billing country</p>
              <p className="font-bold">United States</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
