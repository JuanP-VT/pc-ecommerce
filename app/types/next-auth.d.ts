import type { User } from "next-auth";
import "next-auth/jwt";
import { ProductWithId } from "./product";

declare module "next-auth/jwt" {
  interface JWT {
    _id: ObjectID;
    rol: "admin" | "user";
    cash: number;
    items: ProductWithId[];
    gitID?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      _id: string;
      rol: "admin" | "user";
      cash: number;
      items: ProductWithId[];
    };
  }
}
