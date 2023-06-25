import Pagination from "@/app/components/pagination/Pagination";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Render the correct number of buttons", () => {
  it("should render 1 button", () => {
    const numberOfPages = 1;
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );

    const buttons = screen
      .queryByTestId("pagination-container")
      ?.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
    expect(buttons.length).toBe(numberOfPages);
  });
  it("should render 7 button", () => {
    const numberOfPages = 7;
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );

    const buttons = screen
      .queryByTestId("pagination-container")
      ?.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
    expect(buttons.length).toBe(numberOfPages);
  });
});
describe("handles click events and updates state", () => {
  it("should change state to current page 2", () => {
    const numberOfPages = 5;
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    const { getByText } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
    const pageButton = getByText("2");
    fireEvent.click(pageButton);
    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  it("should change state to current page 7", () => {
    const numberOfPages = 10;
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    const { getByText } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
    const pageButton = getByText("7");
    fireEvent.click(pageButton);
    expect(setCurrentPage).toHaveBeenCalledWith(7);
  });
});

describe("Highlight current button", () => {
  it("highlight current page button : first page ", () => {
    const numberOfPages = 10;
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    const { getByText } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );

    const currentPageButton = getByText("1");
    expect(currentPageButton.classList).toContain("bg-sky-500");
  });

  it("highlight current page button ", () => {
    const numberOfPages = 5;
    const currentPage = 3;
    const setCurrentPage = jest.fn();
    const { getByText } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );

    const currentPageButton = getByText("3");
    expect(currentPageButton.classList).toContain("bg-sky-500");
  });

  it("highlight current page button any page", () => {
    const numberOfPages = 10;
    const currentPage = 8;
    const setCurrentPage = jest.fn();
    const { getByText } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );

    const currentPageButton = getByText("8");
    expect(currentPageButton.classList).toContain("bg-sky-500");
  });
});
describe("renders corrent mode", () => {
  it("renders correct mode based on currentPage", () => {
    const numberOfPages = 10;
    const currentPage = 8;
    const setCurrentPage = jest.fn();
    const { getByTestId } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
    const dynamicMode = getByTestId("dots");
    expect(dynamicMode).toBeInTheDocument();
  });

  it("renders correct mode based on currentPage", () => {
    const numberOfPages = 10;
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    const { queryByTestId } = render(
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
    const dynamicMode = queryByTestId("dots");
    expect(dynamicMode).toBeNull();
  });
});
