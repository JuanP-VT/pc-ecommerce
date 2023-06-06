import type { User } from "next-auth";
import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: ObjectID;
    rol: "admin" | "user";
    cash: number;
    items: [];
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      rol: "admin" | "user";
      cash: number;
      items: [];
    };
  }
}
