import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import UserPage from "./UserPage";
import { User } from "../types/user";
import { request } from "http";

type Props = {};

export default async function page({}: Props) {
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
