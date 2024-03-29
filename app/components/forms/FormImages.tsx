/**
 * Form Images Component
 *
 * @param {Props} props - The props object containing the setImages function and optional product object.
 *
 * This component dynamically creates text inputs for images and saves their content values in an array of strings.
 * The array of strings is going to be the property "images" in a new product.
 *
 * @returns {JSX.Element} The JSX element representing the Form Images component.
 */
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50
            p-2.5 text-sm font-normal text-gray-900 
            focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600
            dark:bg-gray-700 dark:text-white dark:placeholder-gray-400
            dark:focus:border-blue-500 dark:focus:ring-blue-500"
        ></input>
      );
    }
    return items;
  };
  return (
    <div className="mb-4" data-testid="imagesInput">
      <label className="mb-2 block text-sm font-bold text-gray-700">
        Images
        <button
          className="mb-4 ml-4 rounded border border-gray-400  bg-white px-4 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100"
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
          className="ml-3 rounded border border-gray-400 bg-white  px-4 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100"
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
