"use client";

import { addToOrderHistory, clearCart } from "@/redux/novaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import { uid } from "react-uid";
import PageTitle from "../components/PageTitle";
import OrderItem from "./OrderItem";

export default function Cart() {
  const orderHistory = useAppSelector((state) => state.nova.orderHistory);

  return (
    <main className="py-20 relative flex flex-col items-center justify-start min-h-[calc(100vh-160px)] px-2">
      <PageTitle title={"Order History"} />

      <div className=" w-full max-w-screen-xl flex flex-col w-full">
        <div className="w-full flex flex-col items-center justify-start gap-6">
          {orderHistory.length > 0 ? (
            orderHistory.map((item) => {
              return <OrderItem key={uid(item)} product={item} />;
            })
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="font-medium text-2xl text-black">No orders here</p>

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
      </div>
    </main>
  );
}
