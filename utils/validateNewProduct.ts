//Check if the new entry contains all the required properties, return an array with all the error messages

import type { Product } from "@/types/product";
export function validateNewProduct(newProduct: Product): String[] | [] {
  const errors = [];

  if (typeof newProduct.name !== "string") {
    errors.push("Invalid Name");
  }
  if (typeof newProduct.category !== "string") {
    errors.push("Invalid Category");
  }
  if (typeof newProduct.img !== "string") {
    errors.push("Invalid Image");
  }
  if (typeof newProduct.stock !== "number") {
    errors.push("Invalid Stock");
  }
  if (typeof newProduct.price !== "number") {
    errors.push("Invalid Price");
  }
  if (typeof newProduct.discountPercentage !== "number") {
    errors.push("Invalid Discount");
  }
  return errors;
}
