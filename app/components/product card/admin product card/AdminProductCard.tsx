/**
 * React component that represents an admin product card with edit and display modes.
 *
 * @component

 * @param {Object} props - The component props.
 * @param {ProductWithId} props.product - The product object containing information about the product.
 * @returns {JSX.Element} The JSX element representing the AdminProductCard component.
 */
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
        <AdminProductCardEdit
          product={product}
          setIsOnEditMode={setIsOnEditMode}
        />
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
