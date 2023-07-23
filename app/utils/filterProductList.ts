/**
 * Filter Product List
 *
 * This function takes a list of products and a product filter object and returns a list of products
 * that meet the filter properties. The filter properties in the Filter object are optional,
 * and if a property is not provided, it is considered as not filtering on that property.
 *
 * @function
 * @param {ProductWithId[]} productList - An array of products with their respective IDs.
 * @param {Filter} filter - An object representing the filter criteria for the product list.
 * @returns {ProductWithId[]} An array of products that meet the filter criteria.
 *
 * @typedef {ProductWithId} - An object representing a product with an ID.
 * @property {string} _id - The unique identifier of the product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category of the product.
 * @property {number} price - The original price of the product.
 * @property {number} discountPercentage - The discount percentage applied to the product.
 * @property {number} stock - The stock quantity of the product.
 *
 * @typedef {Filter}  - An object representing the filter criteria for the product list.
 * @property {string | undefined} name - The name to filter the products by (case-insensitive).
 * @property {string | undefined} category - The category to filter the products by (case-insensitive).
 * @property {number | undefined} minPrice - The minimum price to filter the products by (inclusive).
 * @property {number | undefined} maxPrice - The maximum price to filter the products by (inclusive).
 * @property {number | undefined} minStock - The minimum stock quantity to filter the products by (inclusive).
 * @property {number | undefined} maxStock - The maximum stock quantity to filter the products by (inclusive).
 * @property {boolean | undefined} haveDiscount - A flag to filter products that have discounts (true) or not (false).
 *
 * @example
 * const productList = [
 *   { _id: "1", name: "Product A", category: "Electronics", price: 100, discountPercentage: 10, stock: 5 },
 *   { _id: "2", name: "Product B", category: "Clothing", price: 50, discountPercentage: 0, stock: 10 },
 *   // more products...
 * ];
 *
 * const filter = {
 *   category: "Electronics",
 *   maxPrice: 80,
 *   minStock: 3,
 *   haveDiscount: true,
 * };
 *
 * const filteredProducts = filterProductList(productList, filter);
 * console.log(filteredProducts);
 * // Output: [{ _id: "1", name: "Product A", category: "Electronics", price: 100, discountPercentage: 10, stock: 5 }]
 */
import { Filter, ProductWithId } from "../types/product";

export default function filterProductList(
  productList: ProductWithId[],
  filter: Filter
): ProductWithId[] | [] {
  let list = [...productList];

  //Create different matches for the filter, if the product meets all matches it is returned by the function
  //All props in object Filter are optional therefore return true if a prop is not provided
  const filteredProduct = list.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(filter.name?.toLowerCase() ?? ""); // always return true if no name is provided
    const isCategoryMatch = product.category
      .toLowerCase()
      .includes(filter.category?.toLowerCase() ?? ""); // always returns true if category is not provided
    //For the real price we have to calculate the discount on the price
    let realPrice = product.price;
    if (product.discountPercentage > 0) {
      realPrice = parseFloat(
        ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)
      );
    }

    const minPriceMatch = filter.minPrice ? realPrice > filter.minPrice : true;
    const maxPriceMatch = filter.maxPrice ? realPrice < filter.maxPrice : true;
    const minStockMatch = filter.minStock
      ? product.stock > filter.minStock
      : true;
    const maxStockMatch = filter.maxStock
      ? product.stock < filter.maxStock
      : true;

    //Check if product discount is higher than 0
    let haveDiscount = true;
    if (filter.haveDiscount === true) {
      haveDiscount = product.discountPercentage > 0 ? true : false;
    }
    // return product object that meets all matches
    return (
      nameMatch &&
      isCategoryMatch &&
      minPriceMatch &&
      maxPriceMatch &&
      minStockMatch &&
      maxStockMatch &&
      haveDiscount
    );
  });
  return filteredProduct;
}
