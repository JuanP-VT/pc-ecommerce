"use client";
// Main Navigation Components,
import NavLink from "./NavLink";
import { useRef } from "react";
import MenuButton from "./MenuButton";

import {
  BuildingStorefrontIcon,
  HomeIcon,
  ShoppingCartIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import NavUserPortrait from "./NavUserPortrait";
type Props = {
  session: Session | null;
};

function Navigation({ session }: Props) {
  const containerRef = useRef(null);
  return (
    <>
      <SessionProvider session={session}>
        <div className="z-20 flex w-40  flex-col justify-center  sm:mx-auto sm:w-screen">
          <MenuButton containerRef={containerRef} />
          <div
            ref={containerRef}
            className="absolute top-10 z-20 flex w-40 -translate-y-96 flex-col justify-center  gap-x-10
            bg-slate-950  px-3 transition sm:relative sm:top-0 sm:w-screen  sm:-translate-y-0 sm:flex-row 
            lg:gap-x-32"
          >
            <NavLink href="/home" icon={HomeIcon} description="Home" />
            <NavLink
              href="/store"
              icon={BuildingStorefrontIcon}
              description="Store"
            />
            <NavLink
              href="/cart"
              icon={ShoppingCartIcon}
              description="ShoppingCart"
            />
            <NavLink href="/admin" icon={CircleStackIcon} description="Admin" />
            <NavUserPortrait />
          </div>
        </div>
      </SessionProvider>
    </>
  );
}

export default Navigation;
