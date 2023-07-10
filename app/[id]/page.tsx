import ProductPage from "../components/product page/ProductPage";
import searchProductInDb from "../lib/searchProductInDb";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NotFound from "../components/unauthorized/NotFound";
export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(OPTIONS);
  //Check if product exist
  const product = await searchProductInDb(params.id);

  if (product) {
    return <ProductPage product={product} session={session} />;
  }
  return <NotFound message="Page Not Found" />;
}
