import { Filter, ProductWithId } from "../types/product";

//This function takes as a list of products and a filter object
//the filter contains properties like name, category, priceRange
//Returns a list  of products that meets the filter props
export default function filterProductList(
  productList: ProductWithId[],
  filter: Filter
): ProductWithId[] | [] {
  let list = [...productList];
  const filteredProduct = list.filter((product) => {
    //All props in object Filter are optional therefore return true if a prop is not provided
    const nameMatch = product.name.includes(filter.name ?? ""); // always return true if not filter name provided
    const isCategoryMatch = product.category.includes(filter.category ?? ""); // always returns true if no filter category provided
    const isPriceMatch = filter.priceRange
      ? product.price > filter.priceRange.min &&
        product.price < filter.priceRange.max
      : true; // Return true if no price range is provided

    const isStockMatch = filter.stockRange
      ? product.stock > filter.stockRange.min &&
        product.stock < filter.stockRange.max
      : true; // Return true if no price range is provided
    return nameMatch && isCategoryMatch && isPriceMatch && isStockMatch;
  });
  return filteredProduct;
}
