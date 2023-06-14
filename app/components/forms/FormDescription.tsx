// This component dynamically creates text areas and saves its content value in an array of string
// This array of string is going to be the property "descriptions" in a new product
import { Dispatch, SetStateAction, useState } from "react";
import handleTextAreaChange from "./handleTextAreaChange";
import { ProductWithId } from "@/app/types/product";
type Props = {
  setDescriptions: Dispatch<SetStateAction<string[]>>;
  product?: ProductWithId;
};

function FormDescription({ setDescriptions, product }: Props) {
  const [numberOfInputs, setNumberOfInputs] = useState(
    product?.description.length ?? 1
  );
  const [textAreas, setTextAreas] = useState<string[]>(
    product?.description ?? []
  );

  // For every "numberOfInputs" create a text area, each text area will save
  // its content value in the "textAreas" State
  // Each text area must have a key to make reference to its index in "textAreas"
  const renderTextAreas = () => {
    const items = [];
    for (let index = 0; index < numberOfInputs; index++) {
      items.push(
        <textarea
          onChange={(e) =>
            handleTextAreaChange(
              e,
              textAreas,
              setTextAreas,
              index,
              setDescriptions
            )
          }
          key={index}
          rows={2}
          defaultValue={product?.img[index] ?? ""}
          className="block p-2.5 w-full text-sm text-gray-900 font-normal
            bg-gray-50 rounded-lg border border-gray-300 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      );
    }
    return items;
  };
  return (
    <div className="mb-4" data-testid="textAreas">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Description
        <button
          className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-semibold  mb-4 ml-4 px-4 border border-gray-400 rounded shadow"
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
          className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-semibold  ml-3 px-4 border border-gray-400 rounded shadow"
          onClick={(e) => {
            e.preventDefault();
            const updTextAreas = [...textAreas];
            if (numberOfInputs > 1) {
              setNumberOfInputs((state) => state - 1);
              updTextAreas.pop();
            }

            if (updTextAreas) {
              setTextAreas(updTextAreas);
              setDescriptions(updTextAreas);
            }
          }}
        >
          Delete
        </button>
        {renderTextAreas()}
      </label>
    </div>
  );
}

export default FormDescription;
