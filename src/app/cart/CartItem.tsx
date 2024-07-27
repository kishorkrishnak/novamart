import { removeFromCart } from "@/redux/novaSlice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { Product } from "../../types/product";
import QuantitySelector from "../products/[id]/QuantitySelector";

const CartItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const totalAmount = (product.price * product.quantity).toFixed(2)
  return (
    <div className="relative gap-5 p-2 border border-gray-200 rounded-md  flex items-center justify-start w-full">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleRemoveFromCart}
      >
        <MdClose size={20} />
      </div>
      <Image
        quality={100}
        src={product.image}
        alt="logo"
        width="0"
        height="0"
        sizes="100vw"
        className="w-24 sm:w-32"
      />

      <div className="flex flex-col gap-2 items-start justify-center md:justify-between md:w-full">
        <h1 className="font-semibold line-clamp-2">{product.title}</h1>
        <p className="text-gray-500 text-sm">Category: ${product.category}</p>

        <p className="text-gray-900 font-bold text-lg">
          {" "}
          ${totalAmount}
        </p>
        <QuantitySelector
          product={product}
          showAddToCart={false}
          showQuantityText={false}
        />
      </div>
    </div>
  );
};

export default CartItem;
