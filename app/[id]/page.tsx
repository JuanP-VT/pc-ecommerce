import ProductPage from "../components/product page/ProductPage";
import searchProductInDb from "../lib/searchProductInDb";

export default async function Page({ params }: { params: { id: string } }) {
  //Check if product exist
  const product = await searchProductInDb(params.id);

  if (product) {
    return <ProductPage product={product} />;
  }
  return <div>page not found</div>;
}
