"use client";
import { useEffect, useState } from "react";
import handleSubmitProduct from "./handleSubmitProduct";
import { Product } from "../../types/product";
import FormDescription from "./FormDescription";
import FormFeedback from "./FormFeedback";
import FormImages from "./FormImages";
import LoadingButton from "../buttons/LoadingButton";

type Props = {};

function NewProductForm({}: Props) {
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    category: "",
    img: [],
    description: [],
    price: 0,
    stock: 0,
    discountPercentage: 0,
  });

  //The descriptions prop is stored in a separate state
  //This hook updates the newProduct description prop
  useEffect(() => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      description: descriptions,
      img: images,
    }));
  }, [descriptions, images]);

  //Button animation state
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="my-16 flex flex-col justify-center xl:px-96 ">
      <h1 className="flex justify-center py-4 text-xl font-bold text-slate-700">
        Add New Product
      </h1>
      <form
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={(e) => handleSubmitProduct(e, newProduct, setIsLoading)}
      >
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                name: e.currentTarget.value,
              })
            }
          ></input>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Category
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="Category"
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category: e.currentTarget.value,
              })
            }
          ></input>
        </div>

        <FormDescription setDescriptions={setDescriptions} />
        <FormImages setImages={setImages} />
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Price
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            step="0.01"
            placeholder="Price"
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: parseInt(e.currentTarget.value),
              })
            }
          ></input>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Current Stock
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            placeholder="Current Stock"
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                stock: parseInt(e.currentTarget.value),
              })
            }
          ></input>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Discount %
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            placeholder="0 if none"
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                discountPercentage: parseInt(e.currentTarget.value),
              })
            }
          ></input>
          <div className="mt-4">
            <FormFeedback newProduct={newProduct} />
          </div>
          <div className="mt-6">
            <LoadingButton
              type="submit"
              text="Create New Product"
              isLoading={isLoading}
            />
          </div>
          <p id="formSuccess" className="ml-2 hidden font-bold text-green-600">
            Success!!
          </p>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
