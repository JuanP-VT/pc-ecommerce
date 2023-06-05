import { Product } from "@/types/product";
import { validateNewProduct } from "../utils/validateNewProduct";

describe("validateNewProduct", () => {
  test("should return an empty array when all properties are valid", () => {
    const newProduct = {
      id: "random",
      name: "Product Name",
      category: "Category",
      img: "image.jpg",
      stock: 10,
      price: 9.99,
      discountPercentage: 10,
    };

    const errors = validateNewProduct(newProduct);

    expect(errors).toEqual([]);
  });

  test("should return an array with error messages for missing properties", () => {
    const newProduct: any = {
      id: "random",
      name: undefined,
      category: "",
      img: undefined,
      stock: null,
      price: undefined,
      discountPercentage: null,
    };

    const errors = validateNewProduct(newProduct);

    expect(errors).toEqual([
      "Invalid Name",
      "Invalid Category",
      "Invalid Image",
      "Invalid Stock",
      "Invalid Price",
      "Invalid Discount",
    ]);
  });
});

test("Stock Price and Discount should not return error when 0", () => {
  const newProduct: any = {
    id: "random",
    name: undefined,
    category: "",
    img: null,
    stock: 0,
    price: 0,
    discountPercentage: 0,
  };
  const errors = validateNewProduct(newProduct);
  expect(errors).toEqual(["Invalid Name", "Invalid Category", "Invalid Image"]);
});

test("Stock Price and Discount should not return error when 0", () => {
  const newProduct: any = {
    id: "random",
    name: "pedro",
    category: "category",
    img: "image.jpg",
    stock: 0,
    price: 0,
    discountPercentage: 0,
  };
  const errors = validateNewProduct(newProduct);
  expect(errors).toEqual([]);
});
