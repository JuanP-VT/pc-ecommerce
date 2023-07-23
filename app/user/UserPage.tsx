/**
 * UserPage Component
 *
 * A component to display user details and purchased items.
 *
 * @module components/user page/UserPage
 * @param {Object} Props - The props for the UserPage component.
 * @param {Object} Props.user - The user object containing user details.
 * @param {string} Props.user.name - The name of the user.
 * @param {string} Props.user.email - The email address of the user.
 * @param {string|null} Props.user.image - The URL of the user's profile image (nullable).
 * @param {string} Props.user.rol - The role of the user (e.g., "admin", "customer").
 * @param {number} Props.user.cash - The current balance of the user .
 * @param {Array} Props.user.items - An array of purchased items.
 * @returns {JSX.Element} - The JSX markup for the UserPage component.
 */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Session } from "next-auth";
import UserItems from "../components/user page/UserItems";
import { User } from "../types/user";

type Props = {
  user: User;
};

function UserPage({ user }: Props) {
  const isValidEmail = //email has to be a non empty string
    typeof user.email === "string" && user.email !== "" ? true : false;

  return (
    <div className="-z-20">
      <div
        className="flex flex-col items-center justify-center rounded-md
       bg-slate-100 p-3 shadow-md"
      >
        <img
          className="z-50 mb-2 h-44 w-44 rounded-full object-contain shadow-sm"
          src={user.image ?? ""}
          alt="user profile image"
        />
        <p className="font-semibold">{user.name}</p>
        <p className="italic">
          {isValidEmail ? user.email : "User email is hidden"}
        </p>
        <p>
          Loyal <span className="capitalize">{user.rol}</span> of PC HUB
        </p>
        <p className="flex items-center justify-center">
          <strong>Current Balance:</strong>{" "}
          <span className="block">${user.cash}</span>
        </p>
        <div className="flex flex-col items-center justify-center">
          <h1 className="p-2 italic">Purchased Items</h1>
          {user.items.map((prod, index) => (
            <UserItems product={prod} key={`userItem${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
