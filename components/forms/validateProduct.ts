//Validates if the request has correct data

import { Product } from "@/types/product";

export default function validateNewProduct(product: Product) {
  const { name, category, price, description, img, stock, discountPercentage } =
    product;
  const errors = [];
  if (typeof name !== "string") {
    errors.push("Name must be a string");
  }
  if (typeof category !== "string") {
    errors.push("Category must be a string");
  }
  if (typeof description !== "string") {
    errors.push("Description must be a string");
  }
  if (typeof img !== "string") {
    errors.push("Image must be a string");
  }
  if (typeof stock !== "number") {
    errors.push("Stock must be a number");
  }
  if (typeof price !== "number") {
    errors.push("Price must be a number");
  }
  if (typeof discountPercentage !== "number") {
    errors.push("Discount  must be a number");
  }
  // No negative numbers
  if (stock < 0) {
    errors.push("Stock cannot be negative");
  }
  if (price < 0) {
    errors.push("Price cannot be negative");
  }
  if (discountPercentage < 0) {
    errors.push("Discount  cannot be negative");
  }
  return errors;
}
