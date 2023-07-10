import React from "react";
import CardPrice from "../product card/store product card/CardPrice";
import { ProductWithId } from "@/app/types/product";
import PriceTag from "../product card/store product card/PriceTag";
import StockTag from "../product card/store product card/StockTag";
import { MapPinIcon } from "@heroicons/react/24/outline";
import AddToCart from "./AddToCart";
type Props = { product: ProductWithId };

function AddToCartSection({ product }: Props) {
  const realPrice = parseFloat(
    ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)
  );
  return (
    <div className=" flex w-auto flex-col rounded-md  pl-8 pt-5 md:pt-14 lg:w-1/4">
      <PriceTag price={realPrice} />
      <p className="font-semibold">
        Free Delivery! <br />
        Purchase now and get promotion
      </p>
      <div className="mt-2 flex  italic">
        <MapPinIcon className="h-5 w-5" />
        <p>Send to my location</p>
      </div>
      <StockTag stock={product.stock} />
      <AddToCart product={product} />
    </div>
  );
}

export default AddToCartSection;
