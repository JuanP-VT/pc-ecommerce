import validateNewProduct from "@/components/forms/validateProduct";
import { Product } from "@/types/product";
test("returns errors for invalid product", () => {
  // Define an invalid product
  const product: any = {
    name: 123, // Invalid: name must be a string
    category: "Electronics",
    price: "49.99", // Invalid: price must be a number
    description: "A new product",
    img: "https://example.com/product.jpg",
    stock: -10, // Invalid: stock cannot be negative
    discountPercentage: 20,
  };

  const errors = validateNewProduct(product);

  // Assert that errors array contains the expected error messages
  expect(errors).toEqual([
    "Name must be a string",
    "Price must be a number",
    "Stock cannot be negative",
  ]);
});

test("validateNewProduct returns no errors for valid product", () => {
  // Define a valid product
  const product: Product = {
    name: "Smartphone",
    category: "Electronics",
    price: 499.99,
    description: "A new smartphone",
    img: "https://example.com/product.jpg",
    stock: 100,
    discountPercentage: 10,
  };

  const errors = validateNewProduct(product);

  // Assert that errors array is empty
  expect(errors).toEqual([]);
});
