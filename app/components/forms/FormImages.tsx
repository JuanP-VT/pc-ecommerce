// This component dynamically creates text inputs and saves its content value in an array of string
// This array of string is going to be the property "descriptions" in a new product
import { Dispatch, SetStateAction, useState } from "react";
import handleImageInputChange from "./handleImageInputChange";
import { ProductWithId } from "@/app/types/product";

type Props = {
  setImages: Dispatch<SetStateAction<string[]>>;
  product?: ProductWithId;
};

function FormImages({ product, setImages }: Props) {
  const [numberOfInputs, setNumberOfInputs] = useState(
    product?.img.length ?? 1
  );
  const [inputImages, setInputImages] = useState<string[]>(product?.img ?? []);
  const renderImageInputs = () => {
    const items = [];
    for (let index = 0; index < numberOfInputs; index++) {
      items.push(
        <input
          onChange={(e) =>
            handleImageInputChange(
              e,
              inputImages,
              setInputImages,
              index,
              setImages
            )
          }
          key={index}
          defaultValue={product?.img[index] ?? ""}
          type="text"
          className="block p-2.5 w-full text-sm text-gray-900 font-normal
            bg-gray-50 rounded-lg border border-gray-300 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      );
    }
    return items;
  };
  return (
    <div className="mb-4" data-testid="imagesInput">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Images
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
            const updInputImages = [...inputImages];
            if (numberOfInputs > 1) {
              setNumberOfInputs((state) => state - 1);
              updInputImages.pop();
            }

            if (updInputImages) {
              setInputImages(updInputImages);
              setImages(updInputImages);
            }
          }}
        >
          Delete
        </button>
        {renderImageInputs()}
      </label>
    </div>
  );
}

export default FormImages;
