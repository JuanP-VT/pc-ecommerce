import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import UserPage from "./UserPage";

type Props = {};

export default async function page({}: Props) {
  const session = await getServerSession(OPTIONS);
  if (session) {
    return <UserPage session={session} />;
  }
  return <div>no session</div>;
}
