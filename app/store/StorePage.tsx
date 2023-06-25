"use client";
import { useEffect, useState } from "react";
import StoreProductCard from "../components/product card/store product card/StoreProductCard";
import { Filter, ProductWithId } from "../types/product";
import StoreSidebar from "../components/store sidebar/StoreSidebar";
import filterProductList from "../utils/filterProductList";
import { productList } from "@/__test__/mocks/productListMock";
import createPagination from "../utils/createPagination";
import Pagination from "../components/pagination/Pagination";

type Props = { data: ProductWithId[] };

export default function StorePage({ data }: Props) {
  const [filter, setFilter] = useState<Filter>({});
  const [currentPage, setCurrentPage] = useState(1);
  const filteredList = filterProductList(data, filter);
  const ItemsPerPage = 4; // Arbitrary value, I want 20 items per page
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
  return (
    <div className="relative flex h-full w-full justify-center">
      <StoreSidebar
        filter={filter}
        setFilter={setFilter}
        productList={productList}
      />
      <div className="flex w-4/5 flex-col p-5">
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
