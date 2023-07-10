export const dynamic = "force-dynamic";
import CartPage from "./CartPage";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NotFound from "../components/unauthorized/NotFound";
export default async function Page() {
  const session = await getServerSession(OPTIONS);
  if (session) {
    return <CartPage session={session} />;
  }
  return <NotFound message="You are not signed in" />;
}
