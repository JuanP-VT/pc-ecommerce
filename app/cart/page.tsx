"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import getCartItems from "../utils/getCartItems";
import { PurchaseOrder } from "../types/order";
import ShoppingCartCard from "../components/shopping cart/ShoppingCartCard";
function Page() {
  const [cartList, setCartList] = useState<PurchaseOrder[]>([]);
  //Get cart list from session storage
  useEffect(() => {
    const key = process.env.SESSION_CART_KEY;
    const list = getCartItems(key);
    setCartList(list);
  }, []);
  return (
    <div className="flex flex-col px-14">
      <h1 className="px-5 py-3 text-3xl font-semibold">Shopping Cart</h1>
      <div className="flex flex-col p-5">
        {cartList.map((order, index) => (
          <ShoppingCartCard order={order} key={`prdcrt${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Page;
