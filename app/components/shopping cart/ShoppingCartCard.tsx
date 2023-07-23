/**
 * Represents a card for displaying a product in the shopping cart.
 * It shows the product name, price, quantity, and an option to delete the item from the cart.
 *
 * @param {PurchaseOrder} order - The purchase order representing the product in the shopping cart.
 * @param {Dispatch<SetStateAction<PurchaseOrder[]>>} setCartList - A state setter function to update the cart list after deleting an item.
 */
/* eslint-disable @next/next/no-img-element */
import { PurchaseOrder } from "@/app/types/order";
import deleteFromCart from "@/app/utils/deleteFromCart";
import { Dispatch, SetStateAction } from "react";

type Props = {
  order: PurchaseOrder;
  setCartList: Dispatch<SetStateAction<PurchaseOrder[]>>;
};

function ShoppingCartCard({ order, setCartList }: Props) {
  const realPrice = parseFloat(
    (
      (order.product.price * (100 - order.product.discountPercentage)) /
      100
    ).toFixed(2)
  );
  return (
    <div className="flex w-full flex-col  rounded-md border sm:flex-row ">
      <img
        className="h-44 w-44 self-center object-contain"
        src={order.product.img[0]}
        alt="product image"
      />

      <div className="ml-5 flex flex-col py-2 lg:pr-14">
        <a
          href={`/${order.product._id}`}
          className="text-sm font-semibold lg:text-lg"
        >
          {order.product.name}
        </a>
        <p className="p-1 text-xs italic">{`Category: ${order.product.category}`}</p>
        <p className="text-lg font-semibold">{`$${realPrice}`}</p>
        <span className="text-sm italic text-green-500">
          Available for Free Delivery!
        </span>
        <p className="text-sm font-semibold">Quantity: {order.quantity}</p>
        <button
          className="mt-2 w-32 text-xs text-blue-300  hover:border-b"
          onClick={() => deleteFromCart(order.product, setCartList)}
        >
          Delete Item From Cart
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartCard;
