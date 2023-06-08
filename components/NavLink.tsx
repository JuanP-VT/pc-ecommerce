"use client";
import Link from "next/link";
import React from "react";
type Props = {
  text?: string;
  href: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  description: string;
};

function NavLink({ text, href, icon, description }: Props) {
  if (icon) {
    return (
      <>
        <Link href={href} className="my-3 flex justify-center w-auto">
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

  return (
    <>
      <Link href={href} className="bg-slate-950 p-3 text-center  w-auto">
        {text}
      </Link>
    </>
  );
}

export default NavLink;
