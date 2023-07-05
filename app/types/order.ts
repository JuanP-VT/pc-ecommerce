import { ProductWithId } from "./product";

export type PurchaseOrder = {
  quantity: number;
  product: ProductWithId;
};
export type AuthHeader = { authorization: string };
