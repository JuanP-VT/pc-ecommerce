import { ProductWithId } from "@/app/types/product";
import { FormEvent } from "react";

export default async function handleEditProduct(
  e: FormEvent<HTMLFormElement>,
  editedProduct: ProductWithId
) {
  e.preventDefault();
  console.log(editedProduct);
  const res = await fetch("/api/editproduct/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedProduct),
  });
}
