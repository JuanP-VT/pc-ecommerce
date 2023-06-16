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
    const filter: Filter = { priceRange: { min: 0, max: 49 } };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(3);
  });

  it("Should filter by price range", () => {
    const filter: Filter = { priceRange: { min: 50, max: 100 } };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(8);
  });

  it("Should filter by max price", () => {
    const filter: Filter = { priceRange: { min: 0, max: 200 } };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(14);
  });

  it("Should return empty array if range is incoherent", () => {
    const filter: Filter = { priceRange: { min: 1400, max: 0 } };
    const findByName = filterProductList(productList, filter);
    expect(findByName.length).toBe(0);
  });
});

describe("Filters by price stock", () => {
  it("Should filter setting a max stock", () => {
    const filter: Filter = { stockRange: { min: 0, max: 49 } };
    const findByStock = filterProductList(productList, filter);

    expect(findByStock.length).toBe(15);
  });

  it("Should filter by stock range", () => {
    const filter: Filter = { stockRange: { min: 50, max: 100 } };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(3);
  });

  it("Should filter by max stock", () => {
    const filter: Filter = { stockRange: { min: 0, max: 200 } };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(21);
  });

  it("Should return empty array if range is incoherent", () => {
    const filter: Filter = { stockRange: { min: 1400, max: 0 } };
    const findByStock = filterProductList(productList, filter);
    expect(findByStock.length).toBe(0);
  });
});
