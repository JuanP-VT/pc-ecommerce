import validateNewProduct from "@/utils/validateProduct";
import { Product } from "@/types/product";
test("returns errors for invalid product", () => {
  // Define an invalid product
  const product: any = {
    name: 123, // Invalid: name must be a string
    category: "Electronics",
    price: "49.99", // Invalid: price must be a number
    description: "A new product", // Invalid : price must be an array
    img: "https://example.com/product.jpg",
    stock: -10, // Invalid: stock cannot be negative
    discountPercentage: 20,
  };
  const errors = validateNewProduct(product);

  // Assert that errors array contains the expected error messages
  expect(errors).toEqual(
    expect.arrayContaining([
      "Name must be a string",
      "Price must be a number",
      "Stock cannot be negative",
      "Description must be an array",
    ])
  );
});

test("return error if description is not an array", () => {
  // Define an invalid product
  const product: any = {
    name: 123, // Invalid: name must be a string
    category: "Electronics",
    price: "49.99", // Invalid: price must be a number
    description: {}, // Invalid : price must be an array
    img: "https://example.com/product.jpg",
    stock: -10, // Invalid: stock cannot be negative
    discountPercentage: 20,
  };

  const errors = validateNewProduct(product);

  // Assert that errors array contains the expected error messages
  expect(errors).toEqual(
    expect.arrayContaining([
      "Name must be a string",
      "Price must be a number",
      "Stock cannot be negative",
      "Description must be an array",
    ])
  );
});

test("return error if discount is higher than 99", () => {
  // Define an invalid product
  const product: any = {
    name: 123, // Invalid: name must be a string
    category: "Electronics",
    price: "49.99", // Invalid: price must be a number
    description: {}, // Invalid : price must be an array
    img: "https://example.com/product.jpg",
    stock: -10, // Invalid: stock cannot be negative
    discountPercentage: 100, // Invalid, FREE ITEMS??,
  };

  const errors = validateNewProduct(product);

  // Assert that errors array contains the expected error messages
  expect(errors).toEqual(
    expect.arrayContaining([
      "Name must be a string",
      "Price must be a number",
      "Stock cannot be negative",
      "Description must be an array",
      "Discount cannot be higher than 99",
    ])
  );
});

test("validateNewProduct returns no errors for valid product", () => {
  // Define a valid product
  const product: Product = {
    name: "Smartphone",
    category: "Electronics",
    price: 499.99,
    description: [],
    img: "https://example.com/product.jpg",
    stock: 100,
    discountPercentage: 10,
  };

  const errors = validateNewProduct(product);

  // Assert that errors array is empty
  expect(errors).toEqual([]);
});
