import { productList } from "@/__test__/mocks/productListMock";
import { Filter, ProductWithId } from "@/app/types/product";
import createCategoryList from "@/app/utils/createCategoryList";
import { Dispatch, SetStateAction, useRef } from "react";
import PriceButton from "./PriceButton";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
type Props = {
  setFilter: Dispatch<SetStateAction<Filter>>;
  filter: Filter;
  productList: ProductWithId[];
};

function StoreSidebar({ setFilter, filter }: Props) {
  const categoryList = createCategoryList(productList);
  const togglerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="absolute left-0 z-10 h-screen w-40  sm:relative  sm:block md:w-72">
      <ArrowRightCircleIcon
        height={30}
        width={30}
        className="r-1/2 absolute top-0 flex cursor-pointer fill-slate-400  transition-all hover:scale-105 md:hidden"
        onClick={() => {
          const toggler = togglerRef.current;
          if (toggler) {
            const isHidden = toggler.classList.contains("-translate-x-96");
            if (isHidden) {
              toggler.classList.remove("-translate-x-96");
              return;
            } else {
              toggler.classList.add("-translate-x-96");
            }
          }
        }}
      />

      <div
        id="toggler"
        ref={togglerRef}
        className="z-10 -translate-x-96  border bg-slate-100 p-3 transition-all transition-none md:block md:-translate-x-0"
      >
        <div className="my-3 " id="storeControls">
          <label className="mb-1 mt-10 block text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            className=" focus:shadow-outline w-full cursor-pointer  appearance-none rounded 
           border px-3 py-2 text-sm leading-tight text-gray-700 shadow
           focus:outline-none"
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

        <div className="my-3">
          <label className="mb-1 block text-sm font-bold text-gray-700">
            Category
          </label>
          <select
            name="categorySelec"
            id="categorySelec"
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm
           text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
            dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={(e) =>
              setFilter({
                ...filter,
                category:
                  e.currentTarget.value === "" // replace empty string with undefined
                    ? undefined
                    : e.currentTarget.value,
              })
            }
          >
            <option value={""}>-</option> {/** Default no category */}
            {categoryList.map((category, index) => (
              <option
                value={category}
                className="focus:shadow-outline w-full appearance-none   border 
            px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                key={`catOp${index}`}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="my-3 flex flex-col">
          <label className="mb-1 block text-sm font-bold text-gray-700">
            Price
          </label>
          <div className="flex flex-col">
            <PriceButton
              setFilter={setFilter}
              filter={filter}
              maxPrice={undefined}
              minPrice={0}
              text=" - "
            />
            <PriceButton
              setFilter={setFilter}
              filter={filter}
              maxPrice={25}
              minPrice={0}
              text="Under 25$"
            />
            <PriceButton
              setFilter={setFilter}
              filter={filter}
              maxPrice={50}
              minPrice={25}
              text="$25 - $50"
            />
            <PriceButton
              setFilter={setFilter}
              filter={filter}
              maxPrice={100}
              minPrice={50}
              text="$50 - $100"
            />
            <PriceButton
              setFilter={setFilter}
              filter={filter}
              maxPrice={200}
              minPrice={100}
              text="$100 - $200"
            />
          </div>
          <PriceButton
            setFilter={setFilter}
            filter={filter}
            maxPrice={300}
            minPrice={200}
            text="$200 - $300"
          />
          <PriceButton
            setFilter={setFilter}
            filter={filter}
            maxPrice={undefined}
            minPrice={300}
            text="$300 & above"
          />
        </div>
        <div className="mb-3 flex">
          <label className="mb-1 mr-1 block text-sm font-bold text-gray-700">
            Special Offers
          </label>
          <input
            className="cursor-pointer shadow-sm"
            type="checkbox"
            checked={filter.haveDiscount}
            onChange={(e) =>
              setFilter({ ...filter, haveDiscount: e.currentTarget.checked })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default StoreSidebar;
