/**
 * The Page function is responsible for determining whether to display the AdminPage component or show an unauthorized message.
 * It fetches the user session using NextAuth's getServerSession and OPTIONS configuration.
 * If the user is authenticated as an "admin," it fetches the product data from an API endpoint and renders the AdminPage component.
 * If the user is not authenticated as an "admin" or there is no valid session, it renders the NotFound component with an "Unauthorized" message.
 *
 * @returns {JSX.Element} - The rendered React component displaying the AdminPage or an unauthorized message.
 */
import { ProductWithId } from "../types/product";
import AdminPage from "./AdminPage";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NotFound from "../components/unauthorized/NotFound";
export const dynamic = "force-dynamic";

async function Page() {
  const session = await getServerSession(OPTIONS);
  const rol = session?.user.rol;
  if (session && rol === "admin") {
    const res = await fetch("https://store-juanp-vt.vercel.app/api/products");
    const data = (await res.json()) as ProductWithId[];

    return <AdminPage data={data} />;
  }
  return <NotFound message="Unauthorized" />;
}

export default Page;
