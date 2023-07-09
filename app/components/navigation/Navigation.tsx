"use client";
/**
 * This is the main navigation bar of the site, it is displayed in every page of this app.
 * It is always in the top of the screen and have links to other functionalities
 * (Store, ShoppingCart, Admin Controls, Sign In)
 */
import NavLink from "./NavLink";
import { useRef } from "react";
import MenuButton from "./MenuButton";

import {
  BuildingStorefrontIcon,
  HomeIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
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
        <div className="z-20 flex w-40  flex-col justify-center  sm:w-full">
          <MenuButton containerRef={containerRef} />
          <div
            ref={containerRef}
            className="absolute top-10 z-20 flex w-40 -translate-y-96 flex-col justify-center  gap-x-10
            bg-slate-950  px-3 transition sm:relative sm:top-0 sm:w-full  sm:-translate-y-0 sm:flex-row 
            lg:gap-x-32"
          >
            <NavLink href="/" icon={HomeIcon} description="Home" />
            <NavLink
              href="/store"
              icon={BuildingStorefrontIcon}
              description="Store"
            />
            <ShoppingCartLink />
            <NavLink href="/admin" icon={CircleStackIcon} description="Admin" />
            <NavUserPortrait />
          </div>
        </div>
      </SessionProvider>
    </>
  );
}

export default Navigation;
