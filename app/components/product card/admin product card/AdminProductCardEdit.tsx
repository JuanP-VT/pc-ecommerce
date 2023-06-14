"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductWithId } from "../../../types/product";
import CardHeader from "../CardHeader";
import FormDescription from "../../forms/FormDescription";
import FormImages from "../../forms/FormImages";

type Props = {
  product: ProductWithId;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};
//This component render a card with input fields related to the props of the object it represents
function AdminProductCardEdit({ product, setIsOnEditMode }: Props) {
  const [descriptions, setDescriptions] = useState(product.description);
  const [imgList, setImgList] = useState(product.img);
  const [editedProduct, setEditedProduct] = useState<ProductWithId>({
    _id: product._id,
    name: product.name,
    category: product.category,
    description: product.description,
    img: product.img,
    stock: product.price,
    price: product.price,
    discountPercentage: product.discountPercentage,
  });
  //Update edited product state when description list or image list updates
  useEffect(() => {
    setEditedProduct((prevProd) => ({
      ...prevProd,
      description: descriptions,
      img: imgList,
    }));
  }, [descriptions, imgList]);
  console.log(editedProduct);
  return (
    <div className="w-80 flex flex-col border ">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
      <form className="p-2">
        <div className="mb-2 flex">
          <label
            className="text-gray-700 w-1/4 flex justify-start items-center text-sm font-bold "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none text-sm  border rounded  p-2
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline
             w-3/4"
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
            className="text-gray-700 flex w-1/4 justify-start items-center text-sm font-bold "
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-3/4 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            defaultValue={product.category}
            placeholder="Product Category"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, category: e.target.value })
            }
          />
        </div>
        <FormDescription
          setDescriptions={setDescriptions}
          product={editedProduct}
        />
        <FormImages setImages={setImgList} product={editedProduct} />
        <div className="mb-2 flex ">
          <label
            className="text-gray-700 flex w-1/4 justify-start items-center text-sm font-bold "
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-3/4 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="text-gray-700 flex w-1/4 justify-start items-center text-sm font-bold "
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-3/4 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            step={0.001}
            defaultValue={product.price}
            placeholder="Price"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div className="mb-2 flex ">
          <label
            className="text-gray-700 flex w-1/4 justify-start items-center text-sm font-bold "
            htmlFor="discount"
          >
            Discount
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-3/4 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      </form>
    </div>
  );
}

export default AdminProductCardEdit;
