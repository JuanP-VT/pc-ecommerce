/**
 * The Description component displays detailed information about a product, including its name, category, price, specifications, and description.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ProductWithId} props.product - The product object representing the product for which to display the description.
 * @returns {JSX.Element} The JSX element representing the Description component.
 */
import { ProductWithId } from "@/app/types/product";
import React from "react";
import CardPrice from "../product card/store product card/CardPrice";
import ProductAbout from "./ProductAbout";
import Specs from "./Specs";

type Props = { product: ProductWithId };

function Description({ product }: Props) {
  return (
    <div className="flex w-full flex-col p-5 pt-14   lg:w-1/2">
      <p className=" rounded-md text-2xl font-semibold leading-relaxed">
        {product.name}
      </p>
      <p className="mb-5 text-sm italic">{`Category ${product.category}`}</p>
      <CardPrice
        price={product.price}
        discountPercentage={product.discountPercentage}
      />
      <Specs specList={product.specs} />
      <ProductAbout description={product.description} />
    </div>
  );
}

export default Description;
