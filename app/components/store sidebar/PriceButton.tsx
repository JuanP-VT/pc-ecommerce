/**
 * Component for rendering a price filter button in the store sidebar.
 *
 * @param {Object} filter - The current filter state object that includes the minPrice and maxPrice.
 * @param {function} setFilter - A state setter function to update the filter state.
 * @param {number | undefined} maxPrice - The maximum price value for the price filter.
 * @param {number | undefined} minPrice - The minimum price value for the price filter.
 * @param {string} text - The text content to display in the button.
 */
import { Filter } from "@/app/types/product";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setFilter: Dispatch<SetStateAction<Filter>>;
  filter: Filter;
  maxPrice: number | undefined;
  minPrice: number | undefined;
  text: string;
};

function PriceButton({ filter, setFilter, text, minPrice, maxPrice }: Props) {
  return (
    <button
      className="flex cursor-pointer text-sm tracking-wide hover:text-yellow-600"
      onClick={() =>
        setFilter({ ...filter, maxPrice: maxPrice, minPrice: minPrice })
      }
    >
      {text}
    </button>
  );
}

export default PriceButton;
