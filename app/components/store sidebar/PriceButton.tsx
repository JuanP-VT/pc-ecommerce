/**
 * Component for the store sidebar
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
      className="flex text-sm tracking-wide hover:text-yellow-600"
      onClick={() =>
        setFilter({ ...filter, maxPrice: maxPrice, minPrice: minPrice })
      }
    >
      {text}
    </button>
  );
}

export default PriceButton;
