"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import PageTitle from "../components/PageTitle";
import CartItem from "./CartItem";
import { uid } from "react-uid";
import Image from "next/image";
import { addToOrderHistory, clearCart } from "@/redux/novaSlice";
import Link from "next/link";
import { BiArrowToLeft } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.nova.cartItems);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const proceedToCheckOut = () => {
    dispatch(addToOrderHistory(cartItems));
    handleClearCart();
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingAmount = totalAmount > 500 ? 5 : 0;
  return (
    <main className="py-20 relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-2">
      <PageTitle title={"Your Cart"} />

      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-start gap-6 lg:gap-20 justify-around w-full">
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

        <div className="w-full lg:w-[400px] lg:w-[600px] bg-[#FAFAFA] py-6 px-3">
          <h1 className="text-2xl font-bold">Cart totals</h1>
          <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
            <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Subtotal</p>
              <p className=" text-xl font-bold">$ {totalAmount.toFixed(2)}</p>
            </div>

            <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Shipping</p>
              <p className="font-bold">$ { shippingAmount.toFixed(2)}</p>
            </div>
          </div>

          <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
            <div className="w-full text-lg font-medium flex items-start justify-between gap-3">
              <p>Total</p>
              <p className=" text-xl font-bold">
                $ {(totalAmount + shippingAmount).toFixed(2)}
              </p>
            </div>
            <button
              onClick={proceedToCheckOut}
              className="btn btn-neutral text-base text-white px-6 w-full"
            >
              Proceed to checkout
            </button>
          </div>

          <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
            <p className="font-semibold">Demo data</p>
            <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Card info.</p>
              <p className="font-bold">4111 1111 1111 1111</p>
            </div>{" "}
            <div className="text-lg font-medium flex items-start justify-start gap-3">
              <p>Billing country</p>
              <p className="font-bold">United States</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
