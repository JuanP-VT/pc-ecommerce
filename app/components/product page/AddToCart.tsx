/**
 * The AddToCart component allows users to add a product to the cart by selecting the 
 * quantity and clicking the "Add to Cart" button.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ProductWithId} props.product - The product object representing the product to be added to the cart.
 * @returns {JSX.Element} The JSX element representing the AddToCart component.
 */
"use client";
import { ProductWithId } from "@/app/types/product";
import { useState } from "react";
import handleAddToCart from "./handleAddToCart";

type Props = {
  product: ProductWithId;
};

function AddToCart({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  //If product stock is higher than 30, limit is 30
  const maxQuantity = product.stock > 30 ? 30 : product.stock;
  const renderOptions = () => {
    const items = [];
    for (let index = 0; index < maxQuantity; index++) {
      const newOption = <option key={`op${index + 1}`}>{index + 1}</option>;
      items.push(newOption);
    }
    return items;
  };
  return (
    <div className="flex flex-col">
      <div className="flex">
        <span className="p-1 font-semibold">Quantity</span>
        <select
          className="w-14 cursor-pointer rounded-lg border p-1"
          name="orderQuantity"
          id="orderQuantity"
          onChange={(e) => setQuantity(parseInt(e.currentTarget.value))}
        >
          {renderOptions()}
        </select>
      </div>
      <button
        className="mt-2 w-36 rounded-md border bg-yellow-500 p-3 font-semibold "
        onClick={() => handleAddToCart(product, quantity)}
      >
        Add To Cart
      </button>
      <div id="feedback" className=" p-2 font-bold transition-all"></div>
    </div>
  );
}

export default AddToCart;
