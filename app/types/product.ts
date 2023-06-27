import { User } from "./user";
export type Spec = {
  key: string;
  value: string;
};
export type Product = {
  name: string;
  category: string;
  description: string[];
  img: string[];
  stock: number;
  price: number;
  discountPercentage: number;
  specs: Spec[];
};

type Review = {
  stars: 1 | 2 | 3 | 4 | 5;
  user: User;
  comment: string;
};

export type ProductWithId = {
  _id: string;
  name: string;
  category: string;
  description: string[];
  img: string[];
  stock: number;
  price: number;
  discountPercentage: number;
  specs: Spec[];
  reviews?: Review[];
};

export type Filter = {
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minStock?: number;
  maxStock?: number;
  haveDiscount?: boolean;
};
