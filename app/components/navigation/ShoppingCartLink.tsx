/**
 * This component is an icon link to the cart page
 * Also it displays the current number of items in the cart
 */
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import getCartItems from "@/app/utils/getCartItems";

function ShoppingCartLink() {
  /**
   * Set event listener for storage update
   * storageUpdate is a custom event dispatched when the session storage is updated
   */
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const list = getCartItems(process.env.SESSION_CART_KEY);
    setCartCount(list.length);
    const handleStorageChange = () => {
      const list = getCartItems(process.env.SESSION_CART_KEY);
      setCartCount(list.length);
    };

    window.addEventListener("storageUpdate", handleStorageChange);

    return () => {
      window.removeEventListener("storageUpdate", handleStorageChange);
    };
  }, []);
  return (
    <Link href="/cart" className="my-3 flex w-auto justify-center">
      <span className="tooltip relative flex" data-tooltip="ShoppingCart">
        <ShoppingCartIcon className="tooltip h-9 w-9  fill-slate-400 hover:animate-pulse" />
        {cartCount > 0 ? (
          <p
            className="absolute bottom-1/4 left-1/3 z-30  flex h-4 w-4  items-center
         justify-center rounded-full bg-yellow-500 p-2.5 text-center font-mono text-xs font-bold text-slate-900"
          >
            {cartCount}
          </p>
        ) : (
          ""
        )}
      </span>
    </Link>
  );
}

export default ShoppingCartLink;
