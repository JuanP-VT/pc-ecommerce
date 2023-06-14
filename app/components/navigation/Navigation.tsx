"use client";
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
        <div className="w-40 flex flex-col  sm:w-screen sm:mx-auto  justify-center ">
          <MenuButton containerRef={containerRef} />
          <div
            ref={containerRef}
            className="  absolute w-40 px-3 flex flex-col justify-center top-10 -translate-y-96  bg-slate-950
            transition  gap-x-10 
            sm:flex-row sm:w-screen sm:relative  sm:-translate-y-0 sm:top-0 
            lg:gap-x-32
            "
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
