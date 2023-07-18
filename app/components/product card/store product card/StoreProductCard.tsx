/**
 * The StoreProductCard component takes a product prop, which is an object that represents a product.
 * The  component uses the product prop to get the name of the product, the price of the product, the stock of the product,
 * and the image of the product.
 */
import { ProductWithId } from "@/app/types/product";
import CardPrice from "./CardPrice";
import StockTag from "./StockTag";
import Image from "next/image";
type Props = {
  product: ProductWithId;
};

function StoreProductCard({ product }: Props) {
  return (
    <div className="flex flex-col items-center border p-2 sm:flex-row">
      <Image
        src={product.img[0]}
        alt="Product Image "
        width={176}
        height={176}
        className="h-44 w-44"
      />

      <div className="ml-3 flex flex-col p-2">
        <a
          href={`/${product._id}`}
          className="mb-2 overflow-hidden text-xl font-semibold lg:pr-52"
        >
          {product.name}
        </a>
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
