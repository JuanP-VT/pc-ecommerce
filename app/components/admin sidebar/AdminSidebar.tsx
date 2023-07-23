/**
 * Admin Sidebar Component
 *
 * @param {Props} props - The props object containing the product filter and the setter function for the filter state.
 *
 * This component represents the sidebar used in the admin interface. It provides links and a filter for managing products.
 * The component receives a product filter object and a setter function to update the filter state as props.
 * The product filter object represents the filter criteria used to manage and display products in the admin interface.
 * The `AdminSidebar` component contains a link to navigate to the "Add Product" page and an `AdminSidebarFilter` component for managing the product filter settings.
 * The sidebar is hidden on small screens (sm:flex), but visible on larger screens (h-screen w-52).
 */
"use client";
import { Filter } from "@/app/types/product";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import AdminSidebarFilter from "./AdminSidebarFilter";

type Props = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};
// Create product filter object
function AdminSidebar({ filter, setFilter }: Props) {
  return (
    <div className="left-0 top-0 z-10 hidden h-screen w-52 flex-col bg-slate-100 p-5 sm:flex">
      <Link
        href="/admin/addproduct"
        className="rounded border bg-white px-4 py-2 text-center font-semibold text-gray-800 shadow hover:bg-gray-100"
      >
        New Product
      </Link>
      <AdminSidebarFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default AdminSidebar;
