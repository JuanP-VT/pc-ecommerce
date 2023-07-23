/**
 * Server Component
 *
 * It serves as a wrapper that checks the user's session using the `getServerSession` function from `next-auth`.
 * If the user is authenticated (i.e., the session is available), it renders the `CartPage` component passing the session object as a prop. Otherwise, it renders the `NotFound`
 * component with the message "You are not signed in". The `OPTIONS` object is used as a parameter for the `getServerSession` function to configure the session retrieval.
 */
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
