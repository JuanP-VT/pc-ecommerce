"use client";
import Link from "next/link";
import React from "react";
type Props = {
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  description: string;
};

function NavLink({ href, icon, description }: Props) {
  return (
    <>
      <Link href={href} className="my-3 flex w-auto justify-center">
        <span className="tooltip" data-tooltip={description}>
          {React.createElement(icon, {
            className:
              "h-9 w-9 fill-slate-400 hover:animate-pulse fill-gray-300 tooltip",
          })}
        </span>
      </Link>
    </>
  );
}

export default NavLink;
