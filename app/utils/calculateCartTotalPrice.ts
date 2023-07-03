import { PurchaseOrder } from "../types/order";
/**
 * The shopping cart is a purchaseOrder[],
 * purchase order is of type {product , quantity} so we have
 * to calculate the product price * quantity of all orders
 * Returns the total price of the shopping cart
 */
export default function calculateCartTotalPrice(
  purchaseOrderList: PurchaseOrder[]
) {
  const prices = purchaseOrderList.map((order) => {
    //max two decimals
    const realPrice = parseFloat(
      (
        (order.product.price * (100 - order.product.discountPercentage)) /
        100
      ).toFixed(2)
    );
    return realPrice * order.quantity;
  });

  const total = prices.reduce(
    (accumulator = 0, totalValue) => accumulator + totalValue,
    0
  );
  return parseFloat(total.toFixed(2));
}
