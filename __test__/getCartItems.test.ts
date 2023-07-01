import getCartItems from "@/app/utils/getCartItems";
beforeEach(() => {
  // Clear session storage before each test
  sessionStorage.clear();
});
test("should return an empty array when the cart key is missing", () => {
  const cartKey = "testEnv";

  // Call the function
  const result = getCartItems(cartKey);

  expect(result).toEqual([]);
});

test("should parse and return the cart items when the cart key exists", () => {
  const cartKey = "testEnv";
  const cartItems = [
    { product: { _id: "123", name: "Product 1", price: 10 }, quantity: 2 },
    { product: { _id: "456", name: "Product 2", price: 15 }, quantity: 1 },
  ];
  sessionStorage.setItem(cartKey, JSON.stringify(cartItems));

  // Call the function
  const result = getCartItems(cartKey);

  // Expectations
  expect(result).toEqual(cartItems);
});
