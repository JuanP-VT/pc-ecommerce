import React from "react";
import CardPrice from "../product card/store product card/CardPrice";
import { ProductWithId } from "@/app/types/product";
import PriceTag from "../product card/store product card/PriceTag";
import StockTag from "../product card/store product card/StockTag";
import { MapPinIcon } from "@heroicons/react/24/outline";
type Props = { product: ProductWithId };

function AddToCart({ product }: Props) {
  const realPrice = parseFloat(
    ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)
  );
  return (
    <div className="px- flex w-auto flex-col rounded-md border p-5 lg:w-1/4">
      <PriceTag price={realPrice} />
      <p className="font-semibold">
        Free Delivery! <br />
        Purchase NOW and get promotion
      </p>
      <div className="mt-2 flex font-thin italic">
        <MapPinIcon className="h-5 w-5" />
        <p>send to location</p>
      </div>
      <StockTag stock={product.stock} />
    </div>
  );
}

export default AddToCart;
