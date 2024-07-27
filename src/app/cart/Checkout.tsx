"use client";

import { addToOrderHistory } from "@/redux/novaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import toast from "react-hot-toast";

const Checkout = ({ handleClearCart }: { handleClearCart: Function }) => {
  const user = useAppSelector((state) => state.nova.user);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.nova.cartItems);

  const proceedToCheckOut = () => {
    if (!user) return toast.error("You must be logged in");
    if (cartItems.length < 1) return toast.error("You must add atleast one cart item");
    

    dispatch(addToOrderHistory(cartItems));
    handleClearCart();
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingAmount = totalAmount > 500 ? 5 : 0;
  return (
    <div className="rounded-md w-full lg:w-[400px] lg:w-[600px] bg-[#FAFAFA] py-6 px-3">
      <h1 className="text-2xl font-bold">Cart totals</h1>
      <div className="border-b border-gray-400 pb-6 flex flex-col items-start justify-center gap-5 mt-5">
        <div className="text-lg font-medium flex items-start justify-start gap-3">
          <p>Subtotal</p>
          <p className=" text-xl font-bold">$ {totalAmount.toFixed(2)}</p>
        </div>

        <div className="text-lg font-medium flex items-start justify-start gap-3">
          <p>Shipping</p>
          <p className="font-bold">$ {shippingAmount.toFixed(2)}</p>
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
  );
};

export default Checkout;
