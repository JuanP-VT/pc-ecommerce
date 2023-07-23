/**
 * Admin Sidebar Filter Component
 *
 * @param {Props} props - The props object containing the product filter and the setter function for the filter state.
 *
 * This component represents the filter options used in the admin sidebar to filter products based on different criteria.
 * The component receives a product filter object and a setter function to update the filter state as props.
 * The product filter object contains various filter criteria for filtering products, such as name, category, price range, and stock range.
 * The component contains input fields and checkboxes for each filter criteria and uses the `setFilter` function to update the filter state based on user input.
 */
import { Filter } from "@/app/types/product";
import { Dispatch, SetStateAction } from "react";

type Props = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

function AdminSidebarFilter({ filter, setFilter }: Props) {
  return (
    <div className="flex flex-col">
      <div className="my-3">
        <label className="mb-1 block text-sm font-bold text-gray-700">
          Name
        </label>
        <input
          className=" focus:shadow-outline w-full appearance-none  rounded border 
          px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFilter({
              ...filter,
              name:
                e.currentTarget.value === "" // replace empty string with undefined
                  ? undefined
                  : e.currentTarget.value,
            })
          }
        ></input>
      </div>
      <div className="my-1">
        <label className="mb-1 block text-sm font-bold text-gray-700">
          Category
        </label>
        <input
          className=" focus:shadow-outline w-full appearance-none rounded border px-3 
          py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Category"
          onChange={(e) =>
            setFilter({
              ...filter,
              category:
                e.currentTarget.value === "" // replace empty string with undefined
                  ? undefined
                  : e.currentTarget.value,
            })
          }
        ></input>
      </div>
      <div className="my-1">
        <label className="mb-1 block text-sm font-bold text-gray-700">
          Price Range
        </label>
        <input
          className=" focus:shadow-outline mb-1 w-full appearance-none rounded border
          px-3 py-2 text-sm  leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="min price"
          onChange={(e) =>
            setFilter({
              ...filter,
              minPrice:
                e.currentTarget.value === "" // replace empty string with undefined
                  ? undefined
                  : parseInt(e.currentTarget.value),
            })
          }
        ></input>
        <input
          className=" focus:shadow-outline w-full  appearance-none rounded border 
          px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="max price"
          onChange={(e) =>
            setFilter({
              ...filter,
              maxPrice:
                e.currentTarget.value === "" // replace empty string with undefined
                  ? undefined
                  : parseInt(e.currentTarget.value),
            })
          }
        ></input>
      </div>
      <div className="my-1">
        <label className="mb-1 block text-sm font-bold text-gray-700">
          Stock Range
        </label>
        <input
          className=" focus:shadow-outline mb-1 w-full  appearance-none rounded border
          px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="min stock"
          onChange={(e) =>
            setFilter({
              ...filter,
              minStock:
                e.currentTarget.value === "" // replace empty string with undefined
                  ? undefined
                  : parseInt(e.currentTarget.value),
            })
          }
        ></input>
        <input
          className=" focus:shadow-outline  w-full appearance-none rounded border 
          px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="max stock"
          onChange={(e) =>
            setFilter({
              ...filter,
              maxStock:
                e.currentTarget.value === "" // replace empty string with undefined
                  ? undefined
                  : parseInt(e.currentTarget.value),
            })
          }
        ></input>
      </div>

      <div className="my-1 flex gap-4">
        <label className="mb-1 block text-sm font-bold text-gray-700">
          On Discount
        </label>
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          checked={filter.haveDiscount}
          onChange={(e) =>
            setFilter({
              ...filter,
              haveDiscount: e.currentTarget.checked,
            })
          }
        />
      </div>
    </div>
  );
}

export default AdminSidebarFilter;
