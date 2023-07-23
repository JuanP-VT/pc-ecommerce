/**
 * NavLink Component
 *
 * A reusable component for rendering navigation links in the navigation bar.
 * It takes an SVG icon, a description, and a URL as props.
 *
 * @component
 *
 * @param {Object} Props - The component props.
 * @param {string} href - The URL of the page to which the link should navigate.
 * @param {React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>} icon - The SVG icon component representing the visual icon for the link.
 * @param {string} description - A string representing the description or tooltip text for the link.
 *
 * @returns {JSX.Element} The JSX element representing the NavLink component.
 */
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
