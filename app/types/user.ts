import { ProductWithId } from "./product";

export type User = {
  _id: string;
  name: string;
  email: string;
  rol: "user" | "admin";
  image: string;
  cash: number;
  items: ProductWithId[];
  gitID?: string;
};

export type UserRef = {
  _id: string;
  name: string;
  email: string;
  rol: string;
  image: string;
};
