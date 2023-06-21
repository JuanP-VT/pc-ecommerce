import formatPrice from "@/app/utils/formatPrice";

it("should return correct format [number,fraction] ", () => {
  const formattedPrice = formatPrice(5.33);
  expect(formattedPrice).toEqual([5, 33]);
});

it("should return correct format [number,fraction] ", () => {
  const formattedPrice = formatPrice(5.03);
  expect(formattedPrice).toEqual([5, 3]);
});

it("should return correct format if number has no fraction [number] ", () => {
  const formattedPrice = formatPrice(5);
  expect(formattedPrice).toEqual([5]);
});

describe("test unusual inputs", () => {
  it("should handle unusual inputs, 0", () => {
    const formattedPrice = formatPrice(0);
    expect(formattedPrice).toEqual([0]);
  });

  it("should handle unusual inputs 0.99", () => {
    const formattedPrice = formatPrice(0.99);
    expect(formattedPrice).toEqual([0, 99]);
  });

  it("should handle unusual inputs 0.9", () => {
    const formattedPrice = formatPrice(0.09);
    expect(formattedPrice).toEqual([0, 9]);
  });
});

describe("handle negative values", () => {
  it("should handle whole negatives values", () => {
    const formattedPrice = formatPrice(-5);
    expect(formattedPrice).toEqual([-5]);
  });
  it("should handle fractional negatives values", () => {
    const formattedPrice = formatPrice(-5.55);
    expect(formattedPrice).toEqual([-5, 55]);
  });
});
