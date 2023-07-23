/**
 * The AddToCartSection component displays the product information, price, stock status, and an "Add to Cart" section.
 * If the user is signed in (valid session), the component shows the product details and the "Add to Cart" functionality.
 * If the user is not signed in (invalid session), the component displays a message prompting the user to sign in to use the cart.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ProductWithId} props.product - The product object representing the product for which to display the "Add to Cart" section.
 * @param {Session | null | undefined} props.session - The user session information, which is used to check if the user is signed in.
 * @returns {JSX.Element} The JSX element representing the AddToCartSection component.
 */
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
