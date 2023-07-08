import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import StarInput, { StarOn } from "@/app/components/reviews/StarInput";

describe("Render stars correctly", () => {
  const setStarRating = jest.fn();
  it("renders 5 stars filled", () => {
    const { getAllByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={5} />
    );
    const starsOn = getAllByTestId(/starOn.+/);
    expect(starsOn.length).toBe(5);
  });

  it("renders 4 four filled and 1 unfilled", () => {
    const { getAllByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={4} />
    );
    const starsOn = getAllByTestId(/starOn.+/);
    const starsOff = getAllByTestId(/starOff.+/);
    expect(starsOn.length).toBe(4);
    expect(starsOff.length).toBe(1);
  });
  it("renders 3 filled and 2 unfilled", () => {
    const { getAllByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={3} />
    );
    const starsOn = getAllByTestId(/starOn.+/);
    const starsOff = getAllByTestId(/starOff.+/);
    expect(starsOn.length).toBe(3);
    expect(starsOff.length).toBe(2);
  });
  it("renders 2  filled and 3 unfilled", () => {
    const { getAllByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={2} />
    );
    const starsOn = getAllByTestId(/starOn.+/);
    const starsOff = getAllByTestId(/starOff.+/);
    expect(starsOn.length).toBe(2);
    expect(starsOff.length).toBe(3);
  });
  it("renders 1 filled and 4 unfilled", () => {
    const { getAllByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={1} />
    );
    const starsOn = getAllByTestId(/starOn.+/);
    const starsOff = getAllByTestId(/starOff.+/);
    expect(starsOn.length).toBe(1);
    expect(starsOff.length).toBe(4);
  });

  it("renders 0 filled and 5 unfilled", () => {
    const { getAllByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={0} />
    );
    const starsOff = getAllByTestId(/starOff.+/);

    expect(starsOff.length).toBe(5);
  });
});

describe("It Sets the correct number of stars", () => {
  it("Renders 2 filled stars on click", () => {
    const setStarRating = jest.fn();
    const { getByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={1} />
    );
    const container = getByTestId("starInput");
    const starTwo = container.children[1];
    fireEvent.click(starTwo);
    expect(setStarRating).toHaveBeenCalledWith(2);
    expect(setStarRating).toHaveBeenCalledTimes(1);
  });

  it("Renders 3 filled stars on click", () => {
    const setStarRating = jest.fn();
    const { getByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={1} />
    );
    const container = getByTestId("starInput");
    const three = container.children[2];
    fireEvent.click(three);
    expect(setStarRating).toHaveBeenCalledWith(3);
    expect(setStarRating).toHaveBeenCalledTimes(1);
  });
  it("Renders 4 filled stars on click", () => {
    const setStarRating = jest.fn();
    const { getByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={1} />
    );
    const container = getByTestId("starInput");
    const three = container.children[3];
    fireEvent.click(three);
    expect(setStarRating).toHaveBeenCalledWith(4);
    expect(setStarRating).toHaveBeenCalledTimes(1);
  });

  it("Renders 5 filled stars on click", () => {
    const setStarRating = jest.fn();
    const { getByTestId } = render(
      <StarInput setStarRating={setStarRating} starRating={1} />
    );
    const container = getByTestId("starInput");
    const three = container.children[4];
    fireEvent.click(three);
    expect(setStarRating).toHaveBeenCalledWith(5);
    expect(setStarRating).toHaveBeenCalledTimes(1);
  });
});
