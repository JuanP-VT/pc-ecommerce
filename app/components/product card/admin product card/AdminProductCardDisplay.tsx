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
    <div className="w-80 flex flex-col border bg-white ">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <div className="h-80 flex flex-col  border  shadow-md items-center">
        <p className="text-xl h-20 font-bold mt-4 px-2 text-justify">
          {product.name}
        </p>
        <Image
          src={product.img[0]}
          alt="Image of the product"
          width={208}
          height={208}
          className="rounded-lg border-slate-300 border shadow-lg object-fill"
        />
      </div>
    </div>
  );
}

export default AdminProductCardDisplay;
