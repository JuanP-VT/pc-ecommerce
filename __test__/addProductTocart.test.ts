import { PurchaseOrder } from "@/app/types/order";
import addProductToCart from "@/app/utils/addProductToCart";
import getCartItems from "@/app/utils/getCartItems";

beforeEach(() => {
  sessionStorage.clear();
});
const cartKey = "testEnv";
const newOrder: PurchaseOrder = {
  quantity: 1,
  product: {
    _id: "123",
    category: "cat",
    name: "Geforce GTX 3090",
    discountPercentage: 0,
    price: 10,
    stock: 100,
    description: [],
    specs: [],
    img: [],
  },
};
it("should add order on an empty cart", () => {
  const updatedCart = addProductToCart(cartKey, newOrder);

  expect(updatedCart).toContainEqual(newOrder);
});

it("should add order to cart if there is not an an order with the same product id", () => {
  //Create a cart with existing items different from the new order
  const existingOrder: PurchaseOrder = {
    quantity: 10,
    product: {
      _id: "1234",
      category: "gpu",
      name: "Radeon RX 580",
      discountPercentage: 0,
      price: 10,
      stock: 100,
      description: [],
      specs: [],
      img: [],
    },
  };
  addProductToCart(cartKey, existingOrder);
  const updatedCart = addProductToCart(cartKey, newOrder);

  expect(updatedCart).toContainEqual(existingOrder);
  expect(updatedCart).toContainEqual(newOrder);
});

it("should replace order if there is already one with the same product id", () => {
  //Create a cart with existing items different from the new order
  const existingOrder: PurchaseOrder = {
    quantity: 10,
    product: {
      _id: "123",
      category: "cat",
      name: "Geforce GTX 3090",
      discountPercentage: 0,
      price: 10,
      stock: 100,
      description: [],
      specs: [],
      img: [],
    },
  };
  sessionStorage.setItem(cartKey, JSON.stringify([existingOrder]));
  const updatedCart = addProductToCart(cartKey, newOrder);

  expect(updatedCart).not.toContainEqual(existingOrder);
  expect(updatedCart).toContainEqual(newOrder);
});
it("should not add a new order with the same product id and quantity", () => {
  const existingOrder: PurchaseOrder = {
    quantity: 1,
    product: {
      _id: "123",
      category: "cat",
      name: "Geforce GTX 3090",
      discountPercentage: 0,
      price: 10,
      stock: 100,
      description: [],
      specs: [],
      img: [],
    },
  };
  // multiple calls
  addProductToCart(cartKey, existingOrder);
  addProductToCart(cartKey, newOrder);
  addProductToCart(cartKey, newOrder);
  addProductToCart(cartKey, newOrder);
  expect(addProductToCart(cartKey, newOrder)).toEqual([existingOrder]);
});
it("should change nothing if new purchase order is already in cart with the same product id and quantity", () => {
  //Create a cart with existing items different from the new order
  const existingOrderOne: PurchaseOrder = {
    quantity: 10,
    product: {
      _id: "123",
      category: "cat",
      name: "Geforce GTX 3090",
      discountPercentage: 0,
      price: 10,
      stock: 100,
      description: [],
      specs: [],
      img: [],
    },
  };
  const existingOrderTwo: PurchaseOrder = {
    quantity: 10,
    product: {
      _id: "345",
      category: "cat",
      name: "Radeon RX 580",
      discountPercentage: 0,
      price: 10,
      stock: 100,
      description: [],
      specs: [],
      img: [],
    },
  };
  addProductToCart(cartKey, existingOrderOne);
  addProductToCart(cartKey, existingOrderTwo);
  const updatedCart = getCartItems(cartKey);
  expect(updatedCart).toContainEqual(existingOrderOne);
  expect(updatedCart).toContainEqual(existingOrderTwo);
});
