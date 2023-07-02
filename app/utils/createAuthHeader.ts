//Authorization header consist in the unique user id + a auth secret
import { config } from "dotenv";
import { AuthHeader } from "../types/order";

export default function createAuthHeader(userId: string): AuthHeader {
  config();
  const headers = {
    authorization: `Bearer ${userId}:${process.env.AUTH_HEADER_SECRET}`,
  };
  return headers;
}
