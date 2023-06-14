"use client";
import { useState } from "react";
import AdminProductCardEdit from "./AdminProductCardEdit";
import AdminProductCardDisplay from "./AdminProductCardDisplay";
import { ProductWithId } from "../../../types/product";

type Props = {
  product: ProductWithId[];
};
function AdminProductCard({ product }: Props) {
  const [isOnEditMode, setIsOnEditMode] = useState(false);
  const [productList, setProductList] = useState(product);
  return (
    <>
      {isOnEditMode ? (
        <AdminProductCardEdit
          product={productList[1]}
          setIsOnEditMode={setIsOnEditMode}
        />
      ) : (
        <AdminProductCardDisplay
          product={productList[1]}
          setIsOnEditMode={setIsOnEditMode}
        />
      )}
    </>
  );
}

export default AdminProductCard;
