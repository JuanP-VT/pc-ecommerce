import { getServerSession } from "next-auth";
import { OPTIONS } from "./api/auth/[...nextauth]/route";
import Navigation from "../components/navigation/Navigation";
export const dynamic = "force-dynamic";
export default async function Home() {
  const session = await getServerSession(OPTIONS);
  return (
    <>
      <div>hiiiiiiiiiiiiiiii</div>
    </>
  );
}
