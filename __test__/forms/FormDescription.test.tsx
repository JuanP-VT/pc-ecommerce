import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import FormDescription from "../../app/components/forms/FormDescription";

it("should render with one textarea at start ", async () => {
  const setDescriptionMock = jest.fn();
  const rnder = render(
    <FormDescription setDescriptions={setDescriptionMock} />
  );
  const textAreas = (await screen.findByTestId("textAreas")).querySelectorAll(
    "textarea"
  );
  expect(textAreas.length).toBe(1);
});

it("should render a new text area on 'Add' button click ", async () => {
  const setDescriptionMock = jest.fn();
  const rnder = render(
    <FormDescription setDescriptions={setDescriptionMock} />
  );
  const addButton = rnder.getByText("Add");
  fireEvent.click(addButton);
  const textAreas = (await screen.findByTestId("textAreas")).querySelectorAll(
    "textarea"
  );
  expect(textAreas.length).toBe(2);
});

it("should not delete the textarea if there is only one ", async () => {
  const setDescriptionMock = jest.fn();
  const rnder = render(
    <FormDescription setDescriptions={setDescriptionMock} />
  );
  const remButton = rnder.getByText("Delete");
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  fireEvent.click(remButton);
  const textAreas = (await screen.findByTestId("textAreas")).querySelectorAll(
    "textarea"
  );
  expect(textAreas.length).toBe(1);
});

//When the input changes, does it update the state correctly?
it("should handle text area change and update textAreas and setDescription", async () => {
  const setDescriptionMock = jest.fn();

  const { getByLabelText } = render(
    <FormDescription setDescriptions={setDescriptionMock} />
  );
  const textArea = (await screen.findByTestId("textAreas")).querySelectorAll(
    "textarea"
  )[0];

  fireEvent.change(textArea, { target: { value: "New description" } });
  expect(textArea.value).toBe("New description");
  expect(setDescriptionMock).toHaveBeenCalledWith(["New description"]);
});

it("should render the correct number of inputs if given a product", async () => {
  const productMock = {
    _id: "648a10a662f9e48825305b4c",
    name: "AMD RTX 570",
    category: "GPU",
    description: ["VERY FAst", " 0% SLOW", "extra queso", "extra pepe"],
    img: ["IMG1", "IMG 1-2"],
    stock: 299,
    price: 299,
    discountPercentage: 10,
  };
  const setDescriptionMock = jest.fn();
  const rnder = render(
    <FormDescription
      setDescriptions={setDescriptionMock}
      product={productMock}
    />
  );
  const textArea = (await screen.findByTestId("textAreas")).querySelectorAll(
    "textarea"
  );
  expect(textArea.length).toBe(4);
});
