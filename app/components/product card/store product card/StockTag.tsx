/**
 * Renders JSX conditionally of Stock
 * Currently there are three states:
 * 1- No Stock
 * 2- Low Stock -- arbitrary set to 22
 * 3- Above Low Stock -- above 22
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
