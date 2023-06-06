import { User } from "./user";

export type Product = {
  name: string;
  category: string;
  description: string;
  img: string;
  stock: number;
  price: number;
  discountPercentage: number;
  reviews: Review[];
};

type Review = {
  stars: 1 | 2 | 3 | 4 | 5;
  user: User;
  comment: string;
};
