/**
 * ShoppingCartLink Component
 *
 * This component is an custom icon link to the cart page.
 * It also displays the current number of items in the cart.
 *
 * @component
 *
 * @returns {JSX.Element} The JSX element representing the ShoppingCartLink component.
 */
import Link from "next/link";
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
    <Link className="group flex items-center py-1 font-semibold " href="/cart">
      <ShoppingCartIcon />
      {cartCount > 0 ? (
        <p className=" ml-2 flex items-center justify-center text-center text-sm font-bold text-slate-900 group-hover:text-blue-500 ">
          {cartCount}
        </p>
      ) : (
        ""
      )}
    </Link>
  );
}
function ShoppingCartIcon() {
  return (
    <svg
      className="group-hover:text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
export default ShoppingCartLink;
