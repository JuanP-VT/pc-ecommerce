/**
 * The AdminPage component is responsible for displaying a paginated list of products with an admin sidebar for filtering.
 * The component takes a `data` prop, which is an array of products with their corresponding IDs.
 * The component uses the `filterProductList` function to filter the products based on the current filter settings.
 * It then uses the `createPagination` function to create a paginated list of products based on the filtered products.
 * The pagination component allows the user to navigate between different pages of the product list.
 *
 * @component
 * @param {Props} props - Props passed to the AdminPage component.
 * @param {ProductWithId[]} props.data - An array of products with their corresponding IDs.
 * @returns {JSX.Element} - The rendered React component displaying the paginated list of products with the admin sidebar for filtering.
 */
"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin sidebar/AdminSidebar";
import AdminProductCard from "../components/product card/admin product card/AdminProductCard";
import { Filter, ProductWithId } from "../types/product";
import filterProductList from "../utils/filterProductList";
import createPagination from "../utils/createPagination";
import Pagination from "../components/pagination/Pagination";

type Props = {
  data: ProductWithId[];
};

// Displays products in the page based on the provided filter
function AdminPage({ data }: Props) {
  const [filter, setFilter] = useState<Filter>({ haveDiscount: false });
  const [currentPage, setCurrentPage] = useState(1);
  const filteredList = filterProductList(data, filter);
  const ItemsPerPage = 16;
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
    <div className="flex flex-col">
      <div className="relative flex">
        <AdminSidebar filter={filter} setFilter={setFilter} />
        <div
          className="flex w-full flex-col  items-center justify-center gap-3  px-3 pt-6 
          shadow-lg sm:grid sm:items-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {pagination[currentPage - 1]?.map((item, index) => (
            <AdminProductCard product={item} key={`aItm${index}`} />
          ))}
        </div>
      </div>
      <div className="flex justify-center pl-48">
        <Pagination
          currentPage={currentPage}
          numberOfPages={numOfPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default AdminPage;
