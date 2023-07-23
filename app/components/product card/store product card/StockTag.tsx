/**
 * Renders JSX conditionally based on the stock quantity.
 * The component has three states:
 * 1. No Stock: When the stock quantity is 0.
 * 2. Low Stock: When the stock quantity is less than 22.
 * 3. Above Low Stock: When the stock quantity is 22 or more.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {number} props.stock - The quantity of stock for the product.
 * @returns {JSX.Element} The JSX element representing the StockTag component.
 */
type Props = {
  stock: number;
};

function StockTag({ stock }: Props) {
  if (stock === 0) {
    return <p className="text-xl font-bold text-slate-600">Out Of Stock</p>;
  }
  if (stock < 22) {
    return (
      <p className="text-xl font-bold text-red-900">
        Only {stock} units left in stock!
      </p>
    );
  }
  return (
    <div className="flex">
      <p className="text-xl font-bold text-green-500">Stock</p>
    </div>
  );
}

export default StockTag;
