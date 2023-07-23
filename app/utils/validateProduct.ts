/**
 * Validate New Product
 *
 * This function validates whether the provided product object contains correct and valid data.
 * It checks various properties of the product and returns an array of error messages if any validation error is found.
 * If the product data is valid, the function returns an empty array.
 *
 * @function
 * @param {Product} product - The product object to be validated.
 * @returns {string[]} An array of error messages if validation errors are found, or an empty array if the product is valid.
 *
 * @typedef {Product} - An object representing a product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category of the product.
 * @property {number} price - The original price of the product.
 * @property {string[]} description - An array of strings representing the product description.
 * @property {string[]} img - An array of strings representing image URLs of the product.
 * @property {number} stock - The stock quantity of the product.
 * @property {number} discountPercentage - The discount percentage applied to the product.
 *
 * @example
 * const product = {
 *   name: "Product A",
 *   category: "Electronics",
 *   price: 100,
 *   description: ["High-quality electronics.", "Great features."],
 *   img: ["image_url1.jpg", "image_url2.jpg"],
 *   stock: 10,
 *   discountPercentage: 15,
 * };
 *
 * const errors = validateNewProduct(product);
 * console.log(errors);
 * // Output: []
 */
import { Product } from "../types/product";

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
  // Is array?
  const isArray = Array.isArray(description);
  if (!isArray) {
    errors.push("Description must be an array");
  }
  if (!Array.isArray(img)) {
    errors.push("Image must be an array");
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
  //Discount cannot be higher than 99
  if (discountPercentage > 99) {
    errors.push("Discount cannot be higher than 99");
  }
  return errors;
}
