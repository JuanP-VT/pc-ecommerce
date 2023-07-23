/**
 * User Layout Component
 *
 * Server Componen, get user session  .
 *
 * @module components/layouts/userLayout
 * @param {Object} Props - The props for the userLayout component.
 * @param {React.ReactNode} Props.children - The child elements to be wrapped by the layout.
 * @returns {JSX.Element} - The JSX markup for the userLayout component.
 */
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import UserPage from "./UserPage";
import { User } from "../types/user";

export default async function page() {
  const session = await getServerSession(OPTIONS);

  if (session) {
    const requestUserID = { _id: session.user._id };
    const req = await fetch(
      "https://store-juanp-vt.vercel.app/api/searchuser",
      {
        body: JSON.stringify(requestUserID),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    const res = (await req.json()) as User;
    return <UserPage user={res} />;
  }
  return <div>no session</div>;
}
