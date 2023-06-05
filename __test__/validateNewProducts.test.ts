import { validateNewProduct } from "../utils/validateNewProduct";

describe("Incorrect request return an array with errors messages", () => {
  test("should return an array with error messages for missing properties", () => {
    const newProduct: any = {
      id: "random",
      name: undefined,
      category: null,
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
  test("Return errors when types are incorrect", () => {
    const newProduct: any = {
      id: "random",
      name: 200,
      category: 100,
      img: 0,
      stock: "0",
      price: "hola",
      discountPercentage: "2%",
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

describe("Correct request return an empty array", () => {
  test("stock, price and discount should not return error when 0", () => {
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
    expect(errors).toEqual(["Invalid Name", "Invalid Image"]);
  });
  test("should return an empty array when all properties are valid", () => {
    const newProduct = {
      id: "random",
      name: "Product Name",
      category: "Category",
      img: "image.jpg",
      stock: 10,
      price: 9.99,
      discountPercentage: 0.1,
    };
    const errors = validateNewProduct(newProduct);
    expect(errors).toEqual([]);
  });
});
