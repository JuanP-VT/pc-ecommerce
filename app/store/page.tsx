import { ProductWithId } from "../types/product";
import StorePage from "./StorePage";

export default async function Page() {
  const res = await fetch("https://store-juanp-vt.vercel.app/api/products", {
    cache: "no-store",
  });
  const data = (await res.json()) as ProductWithId[];

  return <StorePage data={data} />;
}
