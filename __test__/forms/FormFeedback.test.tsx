import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import FormFeedback from "../../app/components/forms/FormFeedback";
import { Product } from "../../app/types/product";

//Displays nothing if there are no errors
it("should display nothing if there are no errors", () => {
  const product: Product = {
    name: "123", //
    category: "Electronics",
    price: 49.99,
    description: [],
    img: ["https://example.com/product.jpg"],
    stock: 10,
    discountPercentage: 20,
  };
  const rnd = render(<FormFeedback newProduct={product} />);
  const list = screen.getByRole("list").querySelectorAll("li");
  expect(list.length).toBe(0);
});

it("should display all errors", () => {
  const product: any = {
    name: "123",
    category: "Electronics",
    price: "49.99", //invalid must be string
    description: [],
    img: "https://example.com/product.jpg",
    stock: "10", //invalid must be string
    discountPercentage: -20,
  };
  const rnd = render(<FormFeedback newProduct={product} />);
  const list = screen.getByRole("list").querySelectorAll("li");
  expect(list.length).toBe(4);
});

it("should display the correct error logs", async () => {
  const product: any = {
    name: "123",
    category: "Electronics",
    price: -0.99,
    description: [],
    img: ["https://example.com/product.jpg"],
    stock: -20, // cant be negative
    discountPercentage: -20, // cant be negative
  };
  render(<FormFeedback newProduct={product} />);
  await expect(
    screen.findByText(/Stock cannot be negative/)
  ).resolves.toBeInTheDocument();
  await expect(
    screen.findByText(/Discount cannot be negative/)
  ).resolves.toBeInTheDocument();
  await expect(
    screen.findByText(/Price cannot be negative/)
  ).resolves.toBeInTheDocument();
});
