import ProductPage from "../components/product page/ProductPage";
import searchProductInDb from "../lib/searchProductInDb";
import { ProductWithId } from "../types/product";

export default async function Page({ params }: { params: { id: string } }) {
  //Check if product exist
  const id = params.id;
  const product = await searchProductInDb(params.id);

  if (product) {
    return <ProductPage product={product} />;
  }
  return <div>Product Not found</div>;
}

export async function generateStaticParams() {
  const productList: ProductWithId[] = await fetch(
    "https://store-juanp-vt.vercel.app/api/products"
  ).then((res) => res.json());

  return productList.map((prod) => {
    prod._id;
  });
}
