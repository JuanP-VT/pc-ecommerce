import { Product } from "./product";

export type User = {
  _id: string;
  name: string;
  email: string;
  rol: string;
  image: string;
  cash: number;
  items: string[];
};
