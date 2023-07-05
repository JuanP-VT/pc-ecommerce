export const dynamic = "force-dynamic";
import CartPage from "./CartPage";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export default async function Page() {
  const session = await getServerSession(OPTIONS);
  if (session) {
    return <CartPage session={session} />;
  }
}
