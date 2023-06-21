import createCategoryList from "@/app/utils/createCategoryList";
import { productList } from "./mocks/productListMock";

/** I basically need only one test for this  */
it("Should return a unique array with all categories", () => {
  const getList = createCategoryList(productList);
  expect(getList).toEqual(["GPU", "CPU", "RAM", "SSD", "HDD"]);
});
