"use client";
import { useState } from "react";
import AdminProductCardEdit from "./AdminProductCardEdit";
import AdminProductCardDisplay from "./AdminProductCardDisplay";
import { ProductWithId } from "../../../types/product";

type Props = {
  product: ProductWithId;
};
function AdminProductCard({ product }: Props) {
  const [isOnEditMode, setIsOnEditMode] = useState(false);
  return (
    <>
      {isOnEditMode ? (
        <AdminProductCardEdit product={product} />
      ) : (
        <AdminProductCardDisplay
          product={product}
          setIsOnEditMode={setIsOnEditMode}
        />
      )}
    </>
  );
}

export default AdminProductCard;
