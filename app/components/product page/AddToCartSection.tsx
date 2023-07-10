import React from "react";
import CardPrice from "../product card/store product card/CardPrice";
import { ProductWithId } from "@/app/types/product";
import PriceTag from "../product card/store product card/PriceTag";
import StockTag from "../product card/store product card/StockTag";
import { MapPinIcon } from "@heroicons/react/24/outline";
import AddToCart from "./AddToCart";
import { Session } from "next-auth";
import NotFoundV2 from "../unauthorized/NotFoundV2";
type Props = { product: ProductWithId; session: Session | null | undefined };

function AddToCartSection({ product, session }: Props) {
  const isValidSession =
    session !== null && session !== undefined ? true : false;
  const realPrice = parseFloat(
    ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)
  );
  return isValidSession ? (
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
  ) : (
    <NotFoundV2 message="Sign in to use the cart!" />
  );
}

export default AddToCartSection;
