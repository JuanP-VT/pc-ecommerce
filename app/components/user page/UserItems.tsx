/* eslint-disable @next/next/no-img-element */
import { ProductWithId } from "@/app/types/product";
import Link from "next/link";

type Props = {
  product: ProductWithId;
};

function UserItems({ product }: Props) {
  return (
    <Link
      href={`/${product._id}`}
      className="border-md mb-3 flex flex-col items-center justify-normal 
       rounded-md border border-slate-300 p-3 shadow-xl transition-all hover:bg-slate-200 hover:shadow-2xl "
    >
      <p className="mb-3 max-h-11 w-96 overflow-hidden font-semibold">
        {product.name}
      </p>
      <img
        className="h-32 w-32 rounded-xl bg-transparent shadow-sm"
        src={product.img[0]}
        alt="product image"
      />
    </Link>
  );
}

export default UserItems;
