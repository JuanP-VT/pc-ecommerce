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
            {rol === "admin" ? (
              <NavLink
                href="/admin"
                icon={CircleStackIcon}
                description="Admin"
              />
            ) : (
              ""
            )}
            <NavUserPortrait />
          </div>
        </div>
      </SessionProvider>
    </>
  );
}

export default Navigation;
