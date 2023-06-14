"use client";
import { Dispatch, SetStateAction } from "react";
import { ProductWithId } from "../../../types/product";
import CardHeader from "../CardHeader";

type Props = {
  product: ProductWithId;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};
function AdminProductCardEdit({ product, setIsOnEditMode }: Props) {
  return (
    <div className="w-80 flex flex-col border ">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <form className="p-2">
        <div className="mb-2 flex">
          <label
            className="text-gray-700 w-1/4 flex justify-start items-center text-sm font-bold "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none text-sm  border rounded  p-2
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline
             w-3/4"
            id="name"
            type="text"
            defaultValue={product.name}
            placeholder="Product Name"
          />
        </div>
        <div className="mb-2 flex ">
          <label
            className="text-gray-700 flex w-1/4 justify-start items-center text-sm font-bold "
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-3/4 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            defaultValue={product.category}
            placeholder="Product Category"
          />
        </div>
      </form>
    </div>
  );
}

export default AdminProductCardEdit;
