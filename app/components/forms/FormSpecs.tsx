/**
 * Form Specs Component
 *
 * @param {Props} props - The props object containing the setSpecs function, product object, and mode.
 *
 * This component dynamically creates spec inputs and saves their content values in an array of Spec objects.
 * The array of Spec objects is going to be the property "specs" in a new product.
 *
 * @returns {JSX.Element} The JSX element representing the Form Specs component.
 */
import { Product, Spec } from "@/app/types/product";
import React, { Dispatch, SetStateAction, useState } from "react";
import SpecInput from "./SpecInput";

type Props = {
  setSpecs: Dispatch<SetStateAction<Spec[]>>;
  product?: Product;
  mode: "col" | "row";
};

function FormSpecs({ product, setSpecs, mode }: Props) {
  const [numberOfInputs, setNumberOfInputs] = useState(
    product?.specs?.length ?? 1
  );
  const [productSpecs, setProductSpecs] = useState<Spec[]>(
    product?.specs ?? []
  );
  const renderSpecInputs = () => {
    const items = [];
    for (let index = 0; index < numberOfInputs; index++) {
      items.push(
        <SpecInput
          productSpecs={productSpecs}
          index={index}
          setSpecs={setSpecs}
          setProductSpecs={setProductSpecs}
          key={`spec${index}`}
          mode={mode}
        />
      );
    }
    return items;
  };
  return (
    <div className="mb-4" data-testid="specs">
      <label className="mb-2 inline-block p-1 text-sm font-bold text-gray-700">
        Specs
      </label>

      <button
        className="mb-4 ml-4 rounded border border-gray-400 
         bg-white px-4 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100"
        onClick={(e) =>
          setNumberOfInputs((state) => {
            e.preventDefault();
            return state + 1;
          })
        }
      >
        Add
      </button>
      <button
        className="ml-3 rounded border border-gray-400 bg-white  
          px-4 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100"
        onClick={(e) => {
          e.preventDefault();
          const updInputValue = [...productSpecs];
          if (numberOfInputs > 1) {
            setNumberOfInputs((state) => state - 1);
            updInputValue.pop();
          }

          if (updInputValue) {
            setProductSpecs(updInputValue);
            setSpecs(updInputValue);
          }
        }}
      >
        Delete
      </button>
      {renderSpecInputs()}
    </div>
  );
}

export default FormSpecs;
