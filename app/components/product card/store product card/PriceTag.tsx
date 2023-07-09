/**
 * Renders JSX conditionally if the price is whole integer or not
 */
import formatPrice from "@/app/utils/formatPrice";

type Props = {
  price: number;
};

function PriceTag({ price }: Props) {
  const formattedPrice = formatPrice(price);
  //price is fractional "eg 10.99"
  if (formattedPrice.length === 2) {
    return (
      <div className="relative flex text-xl font-bold">
        <span className="text-3xl">${formattedPrice[0]}</span>
        <span className="text-xs font-semibold ">{formattedPrice[1]}</span>
      </div>
    );
  }
  return (
    <div>
      <span className="text-3xl">${formattedPrice[0]}.00</span>
    </div>
  );
}

export default PriceTag;
