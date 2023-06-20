import filterProductList from "@/app/utils/filterProductList";
import type { Filter, ProductWithId } from "@/app/types/product";
import { productList } from "./mocks/productListMock";

it("should return the same object if blank filter provided", () => {
  const filter: Filter = {};
  const findByName = filterProductList(productList, filter);
  expect(findByName).toBe(findByName);
});

it("should return empty array if no name match", () => {
  const filter: Filter = { name: "Zx3ke" };
  const findByName = filterProductList(productList, filter);
  expect(findByName.length).toBe(0);
});

it("Should filter by name correctly", () => {
  const filter: Filter = { name: "AMD RTX 580" };
  const findByName = filterProductList(productList, filter);
  expect(findByName[0].name).toBe("AMD RTX 580");
  expect(findByName.length).toBe(1);
});

it("Should filter by category correctly", () => {
  const filter: Filter = { category: "RAM" };
  const findByName = filterProductList(productList, filter);
  expect(findByName.length).toBe(6);
});
describe("Filters by price range", () => {
  it("Should filter setting a max price", () => {
    const filter: Filter = { minPrice: 0, maxPrice: 49 };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(3);
  });

  it("Should filter by price range", () => {
    const filter: Filter = { minPrice: 50, maxPrice: 100 };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(8);
  });

  it("Should filter by max price", () => {
    const filter: Filter = { minPrice: 0, maxPrice: 200 };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(14);
  });

  it("Should return empty array if range is incoherent", () => {
    const filter: Filter = { minPrice: 1400, maxPrice: 0 };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(0);
  });
});

describe("Filters by price stock", () => {
  it("Should filter setting a max stock", () => {
    const filter: Filter = { minStock: 0, maxStock: 49 };
    const findByStock = filterProductList(productList, filter);

    expect(findByStock.length).toBe(15);
  });

  it("Should filter by stock range", () => {
    const filter: Filter = { minStock: 50, maxStock: 100 };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(3);
  });

  it("Should filter by max stock", () => {
    const filter: Filter = { minStock: 0, maxStock: 200 };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(21);
  });

  it("Should return empty array if range is incoherent", () => {
    const filter: Filter = { minStock: 1400, maxStock: 0 };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(0);
  });
});

describe("Filter products by discount", () => {
  it("Should return filtered array by discount", () => {
    const filter: Filter = { haveDiscount: true };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(19);
  });

  it("Should return all objects if not discount specified", () => {
    const filter: Filter = { haveDiscount: undefined };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(24);
  });
});

describe("should handle multiple queries", () => {
  it("handle multiple queries", () => {
    const filter: Filter = {
      category: "GPU",
      maxPrice: 300,
      haveDiscount: true,
    };
    const findByStock = filterProductList(productList, filter);
    console.log(findByStock);
    expect(findByStock.length).toBe(3);
  });
});
