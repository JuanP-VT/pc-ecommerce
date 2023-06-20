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
    <div className="absolute left-0 top-0 z-10 flex h-screen w-44 flex-col border bg-green-100 p-2">
      <Link
        href="/admin/addproduct"
        className="rounded border border-gray-400 bg-white px-4 py-2 text-center font-semibold text-gray-800 shadow hover:bg-gray-100"
      >
        Register Item
      </Link>
      <AdminSidebarFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default AdminSidebar;
