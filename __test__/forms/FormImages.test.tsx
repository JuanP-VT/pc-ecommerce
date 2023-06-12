import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import FormImages from "@/components/forms/FormImages";
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
