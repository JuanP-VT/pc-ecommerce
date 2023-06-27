import FormSpecs from "@/app/components/forms/FormSpecs";
import { Spec } from "@/app/types/product";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
/**
 * Test render behavior and user interactions
 */
it("should render with two inputs at start ", async () => {
  const setSpecsMock = jest.fn();
  const specsMock = [{ key: "a", value: "b" }] as Spec[];
  render(<FormSpecs specs={specsMock} setSpecs={setSpecsMock} />);
  const specsInputs = (await screen.findByTestId("specs")).querySelectorAll(
    "input"
  );
  expect(specsInputs.length).toBe(2);
});

it("should render two new inputs  on 'Add' button click ", async () => {
  const setSpecsMock = jest.fn();
  const specsMock = [{ key: "a", value: "b" }] as Spec[];

  const { getByText } = render(
    <FormSpecs specs={specsMock} setSpecs={setSpecsMock} />
  );
  const addButton = getByText("Add");
  fireEvent.click(addButton);
  const imageInputs = (await screen.findByTestId("specs")).querySelectorAll(
    "input"
  );
  expect(imageInputs.length).toBe(4);
});

it("should not delete the input if there is only one ", async () => {
  const setSpecsMock = jest.fn();
  const specsMock = [{ key: "a", value: "b" }] as Spec[];
  const { getByText } = render(
    <FormSpecs specs={specsMock} setSpecs={setSpecsMock} />
  );
  const remButton = getByText("Delete");
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  const imageInputs = (await screen.findByTestId("specs")).querySelectorAll(
    "input"
  );
  expect(imageInputs.length).toBe(2);
});

it("should render the correct number of inputs if given a product", async () => {
  const specsMock = [
    { key: "a", value: "b" },
    { key: "a", value: "b" },
  ] as Spec[];

  const productMock = {
    _id: "648a10a662f9e48825305b4c",
    name: "AMD RTX 570",
    category: "GPU",
    description: ["VERY FAst", " 0% SLOW"],
    img: ["IMG1", "IMG 1-2"],
    stock: 299,
    price: 299,
    discountPercentage: 10,
    specs: specsMock,
  };
  const secSpecsMock = jest.fn();

  render(
    <FormSpecs
      setSpecs={secSpecsMock}
      specs={specsMock}
      product={productMock}
    />
  );
  const specInputs = (await screen.findByTestId("specs")).querySelectorAll(
    "input"
  );
  expect(specInputs.length).toBe(4);
});
