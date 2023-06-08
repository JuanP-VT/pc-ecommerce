import { getServerSession } from "next-auth";
import { OPTIONS } from "./api/auth/[...nextauth]/route";
import Navigation from "../components/navigation/Navigation";

export default async function Home() {
  const session = await getServerSession(OPTIONS);
  console.log("server session", session?.user);
  return (
    <>
      <div>hi</div>
    </>
  );
}
