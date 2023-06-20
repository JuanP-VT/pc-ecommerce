"use client";
import { useState } from "react";
import AdminSidebar from "../components/admin sidebar/AdminSidebar";
import AdminProductCard from "../components/product card/admin product card/AdminProductCard";
import { Filter, ProductWithId } from "../types/product";
import filterProductList from "../utils/filterProductList";

type Props = {
  data: ProductWithId[];
};

// Displays products in the page based on the provided filter
function AdminPage({ data }: Props) {
  const [filter, setFilter] = useState<Filter>({ haveDiscount: false });
  const filteredData = filterProductList(data, filter);
  return (
    <div className="relative flex">
      <AdminSidebar filter={filter} setFilter={setFilter} />
      <div className="flex w-full flex-col  justify-center gap-3  px-3 pt-6 shadow-lg sm:grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredData.map((item, index) => (
          <AdminProductCard product={item} key={`aItm${index}`} />
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
