import { removeFromOrderHistory } from "@/redux/novaSlice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { Product } from "../../types/product";
import QuantitySelector from "../products/[id]/QuantitySelector";

const OrderItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromHistory = () => {
    dispatch(removeFromOrderHistory(product.id));
  };
  const totalAmount = (product.price * product.quantity).toFixed(2);

  return (
    <div className="md:pl-6 gap-5 relative p-2 border border-gray-200 rounded-md  flex items-center justify-start w-full">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleRemoveFromHistory}
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
      <div className="md:pr-6 gap-2 md:gap-0 grid grids-cols-1 md:grid-cols-3 place-items-start md:place-items-between w-full">
        <h1 className="md:mr-auto line-clamp-2">{product.title}</h1>

        <p className="text-gray-900 font-semibold md:text-center w-full">
          ${product.price}
        </p>

        <div className="md:ml-auto">
          <p className="text-gray-900 font-semibold">
            Quantity: {product.quantity}
          </p>

          <p className="text-gray-900 font-bold">${totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
