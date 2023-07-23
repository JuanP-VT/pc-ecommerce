/**
 * Cart Page Component
 *
 * @param {Props} props - The props object containing the user session.
 *
 * This component represents the shopping cart page. It displays the list of items in the shopping cart
 * and allows the user to proceed with the payment. The component retrieves the cart items from the session storage
 * and calculates the total price of the items in the cart using the calculateCartTotalPrice function.
 * If the cart is empty, it displays the NotFound component with the message "Cart Is Empty".
 * The handlePayment function is used to handle the payment process when the user clicks on the "Pay" button.
 */
"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import getCartItems from "../utils/getCartItems";
import { PurchaseOrder } from "../types/order";
import ShoppingCartCard from "../components/shopping cart/ShoppingCartCard";
import handlePayment from "./handlePayment";
import type { Session } from "next-auth";
import LoadingButton from "../components/buttons/LoadingButton";
import { useRouter } from "next/navigation";
import NotFound from "../components/unauthorized/NotFound";
import calculateCartTotalPrice from "../utils/calculateCartTotalPrice";
type Props = {
  session: Session;
};

function CartPage({ session }: Props) {
  const router = useRouter();
  const [cartList, setCartList] = useState<PurchaseOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const priceTotal = calculateCartTotalPrice(cartList);
  //Get cart list from session storage
  useEffect(() => {
    const key = process.env.SESSION_CART_KEY;
    const list = getCartItems(key);
    setCartList(list);
  }, []);
  const cartIsEmpty = cartList.length === 0 ? true : false;
  if (cartIsEmpty) {
    return <NotFound message="Cart Is Empty" />;
  }
  return (
    <div className="flex flex-col px-5 lg:px-14">
      <h1 className="px-5 py-3 text-3xl font-semibold">Shopping Cart</h1>
      <div className="flex flex-col p-5">
        {cartList.map((order, index) => (
          <ShoppingCartCard
            order={order}
            key={`prdcrt${index}`}
            setCartList={setCartList}
          />
        ))}
      </div>
      <div
        className="flex px-5"
        onClick={() =>
          handlePayment(cartList, session.user._id, setIsLoading, router)
        }
      >
        <div className="flex flex-col">
          <p className=" p-2 text-xl font-semibold">Total ${priceTotal}</p>
          <p id="paymentFeed"></p>
          <LoadingButton text="Pay" isLoading={isLoading} type="button" />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
