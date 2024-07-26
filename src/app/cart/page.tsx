"use client";

import { clearCart } from "@/redux/novaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { uid } from "react-uid";
import PageTitle from "../components/PageTitle";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.nova.cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <main className="py-20 relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-2">
      <PageTitle title={"Your Cart"} />

      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-start gap-6 lg:gap-10 justify-around w-full">
        <div className="w-full flex flex-col items-center justify-start gap-6">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => {
                return <CartItem key={uid(item)} product={item} />;
              })}

              <div className="flex-wrap flex items-center justify-center gap-3 sm:gap-0 sm:justify-between w-full">
                <Link
                  className="text-lg text-gray-400 font-semibold flex items-center justify-center gap-1"
                  href={"/"}
                >
                  <BsArrowLeft /> Go shopping
                </Link>
                <button
                  onClick={handleClearCart}
                  className="btn btn-error text-base text-white py -8 px-8"
                >
                  Reset Cart
                </button>
              </div>
            </>
          ) : (
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
          )}
        </div>
        <Checkout handleClearCart={handleClearCart} />
      </div>
    </main>
  );
}
