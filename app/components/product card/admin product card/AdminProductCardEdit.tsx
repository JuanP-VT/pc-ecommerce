"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductWithId } from "../../../types/product";
import CardHeader from "../CardHeader";
import FormDescription from "../../forms/FormDescription";
import FormImages from "../../forms/FormImages";
import handleEditProduct from "./handleEditProduct";
import LoadingButton from "../../buttons/LoadingButton";
import FormSpecs from "../../forms/FormSpecs";

type Props = {
  product: ProductWithId;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};
//This component render a card with input fields related to the props of the object it represents
function AdminProductCardEdit({ product, setIsOnEditMode }: Props) {
  const [descriptions, setDescriptions] = useState(product.description);
  const [imgList, setImgList] = useState(product.img);
  const [specs, setSpecs] = useState(product.specs);
  const [editedProduct, setEditedProduct] = useState<ProductWithId>({
    _id: product._id,
    name: product.name,
    category: product.category,
    description: product.description,
    img: product.img,
    stock: product.stock,
    price: product.price,
    discountPercentage: product.discountPercentage,
    specs: product.specs,
  });
  //Update edited product state when description list or image list updates
  useEffect(() => {
    setEditedProduct((prevProd) => ({
      ...prevProd,
      description: descriptions,
      img: imgList,
      specs: specs,
    }));
  }, [descriptions, imgList, specs]);
  //Button loading animation
  const [isLoading, setIsLoading] = useState(false);
  console.log(editedProduct);
  return (
    <div className="flex w-80 flex-col border ">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <form
        className="p-2"
        onSubmit={(e) => handleEditProduct(e, editedProduct, setIsLoading)}
      >
        <div className="mb-2 flex">
          <label
            className="flex w-1/4 items-center justify-start text-sm 
            font-bold text-gray-700 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="focus:shadow-outline w-3/4 appearance-none  rounded border  p-2
             text-sm leading-tight text-gray-700 shadow 
             focus:outline-none"
            id="name"
            type="text"
            defaultValue={product.name}
            placeholder="Product Name"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
          />
        </div>
        <div className="mb-2 flex ">
          <label
            className="flex w-1/4 items-center justify-start text-sm font-bold text-gray-700 "
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="focus:shadow-outline w-3/4 appearance-none rounded border p-2 text-sm
             leading-tight text-gray-700 shadow focus:outline-none"
            id="category"
            type="text"
            defaultValue={product.category}
            placeholder="Product Category"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, category: e.target.value })
            }
          />
        </div>
        <FormSpecs setSpecs={setSpecs} product={editedProduct} mode="col" />
        <FormDescription
          setDescriptions={setDescriptions}
          product={editedProduct}
        />
        <FormImages setImages={setImgList} product={editedProduct} />
        <div className="mb-2 flex ">
          <label
            className="flex w-1/4 items-center justify-start text-sm 
            font-bold text-gray-700 "
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            className="focus:shadow-outline w-3/4 appearance-none rounded border p-2 text-sm
             leading-tight text-gray-700 shadow focus:outline-none"
            id="stock"
            type="number"
            defaultValue={product.stock}
            placeholder="Current Stock"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                stock: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div className="mb-2 flex ">
          <label
            className="flex w-1/4 items-center justify-start text-sm 
            font-bold text-gray-700 "
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="focus:shadow-outline w-3/4 appearance-none rounded border p-2 text-sm
             leading-tight text-gray-700 shadow focus:outline-none"
            id="price"
            type="number"
            step={0.001}
            defaultValue={product.price}
            placeholder="Price"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: parseFloat(e.target.value),
              })
            }
          />
        </div>

        <div className="mb-2 flex ">
          <label
            className="flex w-1/4 items-center justify-start text-sm font-bold text-gray-700 "
            htmlFor="discount"
          >
            Discount
          </label>
          <input
            className="focus:shadow-outline w-3/4 appearance-none rounded border p-2 text-sm
             leading-tight text-gray-700 shadow focus:outline-none"
            id="discount"
            type="number"
            defaultValue={product.discountPercentage}
            placeholder="Discount  %"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                discountPercentage: parseInt(e.target.value),
              })
            }
          />
        </div>
        <LoadingButton text="Update" isLoading={isLoading} type="submit" />
      </form>
    </div>
  );
}

export default AdminProductCardEdit;
