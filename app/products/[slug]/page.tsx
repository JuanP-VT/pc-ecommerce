import ProductPage from "@/app/components/product page/ProductPage";
import { ProductWithId } from "@/app/types/product";

//Render product routes dynamically, currently we retrieve all products and then filter because for this side project
// database is going to be relatively small, for bigger projects it would be better to create a API route to be able to 
// request only one item
export default async function Page({ params }: { params: { slug: string } }) {
  const productList:ProductWithId[] = await fetch('https://store-juanp-vt.vercel.app/api/products').then((res) => res.json())
  const findById = productList.filter((product)=> product._id === params.slug)
  const product = findById[0]


  //If ID is not valid display error, else display product page
  if (findById.length === 0) {
    return <div>Invalid ID</div>
  }

  return (<ProductPage product={product}/>)
}

