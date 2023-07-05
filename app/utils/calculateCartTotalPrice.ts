import { PurchaseOrder } from "../types/order";
/**
 *
 * @param purchaseOrderList is an array of purchase orders ({product:{}, quantity:number})
 * @returns a number that represent the value of the sum of all products
 *
 * We have to calculate the true value of each item (after discount), and multiply it by the quantity
 * of each product
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
