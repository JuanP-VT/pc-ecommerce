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
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import NavUserPortrait from "./NavUserPortrait";
import ShoppingCartLink from "./ShoppingCartLink";
type Props = {
  session: Session | null;
};

function Navigation({ session }: Props) {
  const containerRef = useRef(null);
  return (
    <>
      <SessionProvider session={session}>
        <div className="z-20 flex  w-full flex-col justify-center rounded-md border-2 border-blue-200">
          <MenuButton containerRef={containerRef} />
          <div
            ref={containerRef}
            className="absolute top-10 z-20 flex w-full -translate-y-96 flex-col items-center justify-center gap-x-10
             bg-slate-200 transition sm:relative sm:top-0 sm:w-full  sm:-translate-y-0 sm:flex-row  lg:gap-x-32"
          >
            <Link
              className="flex items-center gap-x-2 py-1 font-semibold hover:text-blue-500"
              href="#"
            >
              <GamepadIcon />
              <span className="whitespace-nowrap text-lg">PC HUB</span>
            </Link>
            <Link
              className="flex items-center  py-1 font-semibold hover:text-blue-500"
              href="/store"
            >
              <span>Store</span>
            </Link>
            {session ? <ShoppingCartLink /> : ""}
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

export default Navigation;
