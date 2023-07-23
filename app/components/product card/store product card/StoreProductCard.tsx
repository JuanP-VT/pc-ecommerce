/**
 * The StoreProductCard component displays a product card with information about the product.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ProductWithId} props.product - The product object representing the product to be displayed.
 * @returns {JSX.Element} The JSX element representing the StoreProductCard component.
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
