import { ProductWithId } from "../types/product";
import StorePage from "./StorePage";

/**
 * Server Component that fetches product data from the API and renders the StorePage component.
 * @returns {JSX.Element} - Returns the StorePage component with the fetched product data.
 */
export default async function Page() {
  const res = await fetch("https://store-juanp-vt.vercel.app/api/products", {
    cache: "no-store",
  });
  const data = (await res.json()) as ProductWithId[];

  return <StorePage data={data} />;
}
