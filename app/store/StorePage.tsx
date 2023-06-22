"use client";
import { useState } from "react";
import StoreProductCard from "../components/product card/store product card/StoreProductCard";
import { Filter, ProductWithId } from "../types/product";
import StoreSidebar from "../components/store sidebar/StoreSidebar";
import filterProductList from "../utils/filterProductList";
import { productList } from "@/__test__/mocks/productListMock";

type Props = { data: ProductWithId[] };

export default function StorePage({ data }: Props) {
  const [filter, setFilter] = useState<Filter>({});
  const filteredList = filterProductList(data, filter);
  return (
    <div className="relative flex h-full w-full justify-center">
      <StoreSidebar
        filter={filter}
        setFilter={setFilter}
        productList={productList}
      />
      <div className="flex w-4/5 flex-col p-5">
        {filteredList.map((prod, index) => (
          <StoreProductCard product={prod} key={`storeItem${index}`} />
        ))}
      </div>
    </div>
  );
}
