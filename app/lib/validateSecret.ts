import { after } from "node:test";

export default function validateSecret(string: string) {
  // Remove the 'Bearer ' prefix
  string = string.replace("Bearer ", "");

  // Extract the numbers before and after the colon
  const secret = string.split(":")[1];
  if (secret !== process.env.AUTH_HEADER_SECRET) {
    return false;
  }
  return true;
}
