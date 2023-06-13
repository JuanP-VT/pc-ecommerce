"use client";
import { useState } from "react";
import AdminProductCardEdit from "./AdminProductCardEdit";
import AdminProductCardDisplay from "./AdminProductCardDisplay";
import { Product } from "@/types/product";
type Props = {
  productList: Product[];
};
function AdminProductCard({ productList }: Props) {
  const [isOnEditMode, setIsOnEditMode] = useState(false);
  return (
    <>
      {isOnEditMode ? (
        <AdminProductCardEdit productList={productList} />
      ) : (
        <AdminProductCardDisplay productList={productList} />
      )}
    </>
  );
}

export default AdminProductCard;
