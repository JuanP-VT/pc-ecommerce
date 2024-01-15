/**
 * Navigation Component
 *
 * The component is the main navigation bar of the site and is displayed on every page of the app.
 * It contains links to various functionalities, such as Home, Store, ShoppingCart, Admin Controls, and Sign In.
 * The navigation bar is always positioned at the top of the screen.
 *
 * @component
 *
 * @param {Object} Props - The component props.
 * @param {Session | null} session - The user session, obtained from NextAuth's SessionProvider.
 *
 * @returns {JSX.Element} The JSX element representing the Navigation component.
 */
"use client";

import { useRef } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import {
  BuildingStorefrontIcon,
  HomeIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import NavUserPortrait from "./NavUserPortrait";

import ShoppingCartLink from "./ShoppingCartLink";
import { Button } from "../ui/button";
type Props = {
  session: Session | null;
};

function Navigation({ session }: Props) {
  const rol = session?.user.rol;
  const containerRef = useRef(null);
  return (
    <>
      <SessionProvider session={session}>
        <div className="z-20 flex w-full  flex-col justify-center  bg-slate-950">
          <MenuButton containerRef={containerRef} />
          <div
            ref={containerRef}
            className="absolute top-10 z-20 flex w-40 -translate-y-96 flex-col justify-center  gap-x-10
            bg-slate-100  px-3 transition sm:relative sm:top-0 sm:w-full  sm:-translate-y-0 sm:flex-row 
            lg:gap-x-32"
          >
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <GamepadIcon />
              <span className="text-lg">PC HUB</span>
            </Link>
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/store"
            >
              <span>Store</span>
            </Link>{" "}
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/cart"
            >
              <Button size="icon" variant="ghost">
                <ShoppingCartIcon />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <ShoppingCartLink />
            <NavUserPortrait />
          </div>
        </div>
      </SessionProvider>
    </>
  );
}
function GamepadIcon() {
  return (
    <svg
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg
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
export default Navigation;
