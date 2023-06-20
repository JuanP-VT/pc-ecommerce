import { ProductWithId } from "../types/product";
import AdminPage from "./AdminPage";
export const dynamic = "force-dynamic";

async function Page() {
  const res = await fetch("https://store-juanp-vt.vercel.app/api/products");
  const data = (await res.json()) as ProductWithId[];

  return <AdminPage data={data} />;
}

export default Page;
