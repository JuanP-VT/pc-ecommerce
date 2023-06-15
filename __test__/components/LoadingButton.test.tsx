import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import LoadingButton from "@/app/components/buttons/LoadingButton";
it("should render a  button in normal mode", () => {
  const { getByText, queryByTestId } = render(
    <LoadingButton text="Update" isLoading={false} type="button" />
  );

  // Assert that the button is rendered
  const button = getByText("Update");
  expect(button).toBeInTheDocument();

  // Assert that the loading icon is not rendered
  const loadingIcon = queryByTestId("loading-icon");
  expect(loadingIcon).toBeNull();
});
it("renders text correctly", async () => {
  const { getByText, queryByTestId } = render(
    <LoadingButton text="Sholo" isLoading={false} type="button" />
  );
  const text = await screen.findByText("Sholo");
  expect(text).toBeInTheDocument();
});
it("should render the loading icon in loading mode", () => {
  const { getByText, queryByTestId } = render(
    <LoadingButton text="Update" isLoading={true} type="button" />
  );

  // Assert that the loading icon is rendered
  const loadingIcon = queryByTestId("loading-icon");
  expect(loadingIcon).toBeInTheDocument();
});

describe("it should render different button types", () => {
  it("should render  button type", () => {
    const { getByText } = render(
      <LoadingButton text="Update" isLoading={false} type="button" />
    );

    // Assert that the button is rendered
    const button = getByText("Update");
    expect(button).toBeInTheDocument();

    //Assert the type
    expect(button.getAttribute("type")).toBe("button");
  });
  it("should render submit  type", () => {
    const { getByText } = render(
      <LoadingButton text="Update" isLoading={false} type="submit" />
    );

    // Assert that the button is rendered
    const button = getByText("Update");
    expect(button).toBeInTheDocument();

    //Assert the type
    expect(button.getAttribute("type")).toBe("submit");
  });
  it("should render submit  type", () => {
    const { getByText } = render(
      <LoadingButton text="Update" isLoading={false} type="reset" />
    );

    // Assert that the button is rendered
    const button = getByText("Update");
    expect(button).toBeInTheDocument();

    //Assert the type
    expect(button.getAttribute("type")).toBe("reset");
  });
});
