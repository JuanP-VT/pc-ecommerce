/* eslint-disable @next/next/no-img-element */
"use client";
import { ProductWithId } from "../../../types/product";
import CardHeader from "../CardHeader";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
type Props = {
  product: ProductWithId;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};
function AdminProductCardDisplay({ product, setIsOnEditMode }: Props) {
  return (
    <div className="flex h-96 w-80 flex-col rounded-lg border shadow-lg">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <div className="relative flex h-full flex-col items-center">
        <p className="mt-4 h-20 px-2 text-justify text-xl font-bold">
          {product.name}
        </p>
        <Image
          src={product.img[0]}
          alt="Image of the product"
          width={250}
          height={250}
          className="right-0.  absolute bottom-0 rounded-lg border-slate-300  "
        />
      </div>
    </div>
  );
}

export default AdminProductCardDisplay;
