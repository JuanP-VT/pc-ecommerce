import { ProductWithId } from "../types/product";
import AdminPage from "./AdminPage";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NotFound from "../components/unauthorized/NotFound";
export const dynamic = "force-dynamic";

async function Page() {
  const session = await getServerSession(OPTIONS);
  if (session) {
    const res = await fetch("https://store-juanp-vt.vercel.app/api/products");
    const data = (await res.json()) as ProductWithId[];

    return <AdminPage data={data} />;
  }
  return <NotFound message="Unauthorized" />;
}

export default Page;
