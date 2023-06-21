/* eslint-disable @next/next/no-img-element */
import { ProductWithId } from "@/app/types/product";
import CardPrice from "./CardPrice";
import StockTag from "./StockTag";

type Props = {
  product: ProductWithId;
};

function StoreProductCard({ product }: Props) {
  return (
    <div className="flex  w-screen border p-2">
      <img src={product.img[0]} alt="Product Image " className="h-44 w-44" />

      <div className="ml-3 flex flex-col p-2">
        <p className="mb-2 overflow-hidden text-xl font-semibold">
          {product.name}
        </p>
        <CardPrice
          price={product.price}
          discountPercentage={product.discountPercentage}
        />
        <StockTag stock={product.stock} />
        <p className="text-xs font-semibold text-slate-600">
          Ship to your house
        </p>
      </div>
    </div>
  );
}

export default StoreProductCard;
