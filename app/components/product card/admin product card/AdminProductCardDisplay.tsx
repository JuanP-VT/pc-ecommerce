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
    <div className="flex h-80 w-64 flex-col rounded-lg border shadow-lg">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <div className="relative flex h-full flex-col items-center">
        <p className="text-md mt-4 h-20 px-2 text-justify font-bold">
          {product.name}
        </p>
        <img
          src={product.img[0]}
          alt="Image of the product"
          style={{ objectFit: "contain" }}
          className="right-0.  absolute bottom-0 h-44 w-44 rounded-lg border-slate-300  "
        />
      </div>
    </div>
  );
}

export default AdminProductCardDisplay;
