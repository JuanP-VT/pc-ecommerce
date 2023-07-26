/**
 * The StorePage component displays a paginated list of products based on the user's filter criteria.
 *
 * @param {Props} props - The props for the StorePage component.
 * @param {ProductWithId[]} props.data - An array of products to be displayed and filtered.
 * @returns {JSX.Element} - Returns the StorePage component UI.
 *
 * Displays feedback if no product matches the filter criteria
 */
"use client";
import { useEffect, useState } from "react";
import StoreProductCard from "../components/product card/store product card/StoreProductCard";
import { Filter, ProductWithId } from "../types/product";
import StoreSidebar from "../components/store sidebar/StoreSidebar";
import filterProductList from "../utils/filterProductList";
import { productList } from "@/__test__/mocks/productListMock";
import createPagination from "../utils/createPagination";
import Pagination from "../components/pagination/Pagination";
import NotFound from "../components/unauthorized/NotFound";

type Props = { data: ProductWithId[] };

export default function StorePage({ data }: Props) {
  const [filter, setFilter] = useState<Filter>({ haveDiscount: false });
  const [currentPage, setCurrentPage] = useState(1);
  const filteredList = filterProductList(data, filter);
  const ItemsPerPage = 4;
  const numOfPages = Math.ceil(filteredList.length / ItemsPerPage); // Always round fraction up
  const pagination: ProductWithId[][] = createPagination(
    filteredList,
    ItemsPerPage
  );
  // Handle case where current page becomes undefined for new filtered array
  useEffect(() => {
    if (currentPage > numOfPages) {
      setCurrentPage(1); // Set current page to the first page
    }
  }, [currentPage, numOfPages]);
  //If no product matches filter criteria

  return (
    <div className="relative flex h-full w-full justify-center">
      <StoreSidebar
        filter={filter}
        setFilter={setFilter}
        productList={productList}
      />
      <div className="flex w-4/5 flex-col p-5">
        {
          //If no product matches the filter criteria
          pagination.length === 0 ? (
            <NotFound message="No Product Match The Filter Criteria" />
          ) : (
            ""
          )
        }
        {pagination[currentPage - 1]?.map((prod, index) => (
          <StoreProductCard product={prod} key={`storeItem${index}`} />
        ))}
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            numberOfPages={numOfPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
