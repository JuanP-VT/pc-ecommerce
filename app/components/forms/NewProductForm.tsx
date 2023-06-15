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
      <h1 className="flex justify-center py-4 font-bold text-xl text-slate-700">
        Add New Product
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSubmitProduct(e, newProduct, setIsLoading)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Current Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Discount %
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <p id="formSuccess" className="text-green-600 ml-2 font-bold hidden">
            Success!!
          </p>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
