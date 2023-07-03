import validateSecret from "@/app/lib/validateSecret";
import { AuthHeader } from "@/app/types/order";
import createAuthHeader from "@/app/utils/createAuthHeader";

it("should return true for a valid auth header", async () => {
  const authHeader = createAuthHeader("648a39e38272c523d8e88625");
  const isValid = validateSecret(authHeader.authorization);
  expect(isValid).toBe(true);
});

it("should return false for invalid header", () => {
  const authHeader: AuthHeader = {
    authorization: "Bearer 19203920192:12s3x839120#!asd1sm1sl1s21s",
  };
  const isValid = validateSecret(authHeader.authorization);
  expect(isValid).toBe(false);
});
