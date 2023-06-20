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
    <div className="hidden left-0 top-0 z-10 h-screen w-52 flex-col bg-slate-100 p-4 sm:flex">
      <Link
        href="/admin/addproduct"
        className="rounded border  bg-white px-4 py-2 text-center font-semibold text-gray-800 shadow hover:bg-gray-100"
      >
        New Product
      </Link>
      <AdminSidebarFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default AdminSidebar;
