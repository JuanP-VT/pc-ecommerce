import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import FormImages from "../../app/components/forms/FormImages";
("@/components/forms/");

it("should render with one textarea at start ", async () => {
  const setImagesMock = jest.fn();
  const rnder = render(<FormImages setImages={setImagesMock} />);
  const imageInputs = (
    await screen.findByTestId("imagesInput")
  ).querySelectorAll("input");
  expect(imageInputs.length).toBe(1);
});

it("should render a new input  on 'Add' button click ", async () => {
  const setImagesMock = jest.fn();
  const rnder = render(<FormImages setImages={setImagesMock} />);
  const addButton = rnder.getByText("Add");
  fireEvent.click(addButton);
  const imageInputs = (
    await screen.findByTestId("imagesInput")
  ).querySelectorAll("input");
  expect(imageInputs.length).toBe(2);
});

it("should not delete the input if there is only one ", async () => {
  const setImagesMock = jest.fn();
  const rnder = render(<FormImages setImages={setImagesMock} />);
  const remButton = rnder.getByText("Delete");
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  const imageInputs = (
    await screen.findByTestId("imagesInput")
  ).querySelectorAll("input");
  expect(imageInputs.length).toBe(1);
});

it("should render the correct number of inputs if given a product", async () => {
  const productMock = {
    _id: "648a10a662f9e48825305b4c",
    name: "AMD RTX 570",
    category: "GPU",
    description: ["VERY FAst", " 0% SLOW"],
    img: ["IMG1", "IMG 1-2"],
    stock: 299,
    price: 299,
    discountPercentage: 10,
    specs: [{ key: "a", value: "b" }],
  };
  const setImagesMock = jest.fn();
  const rnder = render(
    <FormImages setImages={setImagesMock} product={productMock} />
  );
  const imageInputs = (
    await screen.findByTestId("imagesInput")
  ).querySelectorAll("input");
  expect(imageInputs.length).toBe(2);
});
