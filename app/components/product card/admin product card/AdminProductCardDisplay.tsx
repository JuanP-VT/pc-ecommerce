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
    <div className="w-80 h-96 flex flex-col border shadow-lg rounded-lg">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <div className="h-full flex flex-col items-center relative">
        <p className="text-xl h-20 font-bold mt-4 px-2 text-justify">
          {product.name}
        </p>
        <Image
          src={product.img[0]}
          alt="Image of the product"
          width={250}
          height={250}
          className="rounded-lg  absolute bottom-0 right-0. border-slate-300  "
        />
      </div>
    </div>
  );
}

export default AdminProductCardDisplay;
