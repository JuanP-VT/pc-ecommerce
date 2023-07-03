/**
 * The shopping cart is a purchaseOrder[],
 * purchase order is of type {product , quantity} so we have
 * to calculate the product price * quantity of all orders
 */
import calculateCartTotalPrice from "@/app/utils/calculateCartTotalPrice";
import {
  purchaseOrderMockOne,
  purchaseOrderMockTwo,
} from "./mocks/purchaseOrderMock";

it("should calculate the correct value : mock one", () => {
  const total = calculateCartTotalPrice(purchaseOrderMockOne);
  expect(total).toBe(2511.4);
});

it("should calculate the correct value:mock two", () => {
  const total = calculateCartTotalPrice(purchaseOrderMockTwo);
  expect(total).toBe(3600.23);
});
