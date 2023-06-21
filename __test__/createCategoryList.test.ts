import createCategoryList from "@/app/utils/createCategoryList";
import { productList } from "./mocks/productListMock";
it("run", () => {
  const getList = createCategoryList(productList);
  expect(getList).toEqual(["GPU", "CPU", "RAM", "SSD", "HDD"]);
});
