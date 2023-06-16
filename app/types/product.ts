import { User } from "./user";

export type Product = {
  name: string;
  category: string;
  description: string[];
  img: string[];
  stock: number;
  price: number;
  discountPercentage: number;
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
  reviews?: Review[];
};

export type Filter = {
  name?: string;
  category?: string;
  stockRange?: {
    min: number;
    max: number;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  haveDiscount?: boolean;
};
