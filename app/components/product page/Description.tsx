import { ProductWithId } from "@/app/types/product";
import React from "react";
import CardPrice from "../product card/store product card/CardPrice";
import StockTag from "../product card/store product card/StockTag";
import ProductAbout from "./ProductAbout";

type Props = { product: ProductWithId };

function Description({ product }: Props) {
  return (
    <div className="flex w-full flex-col p-5 pt-5 lg:w-1/2">
      <p className="text-2xl font-semibold">{product.name}</p>
      <p className="mb-2 text-sm italic">{`Category ${product.category}`}</p>
      <CardPrice
        price={product.price}
        discountPercentage={product.discountPercentage}
      />
      <StockTag stock={product.stock} />
      <ProductAbout description={product.description} />
    </div>
  );
}

export default Description;
