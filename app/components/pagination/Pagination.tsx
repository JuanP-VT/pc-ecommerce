/**
 * Pagination Component
 *
 * The component takes a `numberOfPages` prop, which is the total number of pages,
 * and a `currentPage` prop, which is the current page number.
 * The component then renders a pagination bar with buttons that allow the user to navigate
 * to different pages.
 *
 * @component
 *
 * @param {number} numberOfPages - The total number of pages.
 * @param {number} currentPage - The current page number.
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentPage - The function to update the current page.
 *
 * @returns {JSX.Element} The JSX element representing the Pagination component.
 */
"use client";
import { Dispatch, SetStateAction } from "react";
import PaginationButton from "./PaginationButton";
import PaginationFillerDots from "./PaginationFillerDots";
type Props = {
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

function Pagination({ numberOfPages, currentPage, setCurrentPage }: Props) {
  //When CurrentPage is below 7
  if (currentPage < 7) {
    const renderButtons = () => {
      const items = [];
      const limit = numberOfPages < 7 ? numberOfPages : 7;
      for (let index = 0; index < limit; index++) {
        const element = (
          <PaginationButton
            page={index + 1}
            key={`pgnBtn${index + 1}`}
            setCurrentPage={setCurrentPage}
            isCurrent={index + 1 === currentPage}
          />
        );
        items.push(element);
      }
      return items;
    };
    return (
      <div className="flex  w-full p-2" data-testid="pagination-container">
        {renderButtons()}
      </div>
    );
  }
  /**
   * Dynamically generate buttons, pagination layout is
   * CP = current Page
   * first Page ... | CP-2 | CP-1 | CP | CP+1 | CP+2 |
   * CP -1 & CP -2 will be referred as items below (below current page)
   * CP +2 & CP +2 will be referred as items above (above current page)
   * Should not create buttons above max page
   */
  const dynamicRenderButton = () => {
    // Items below current page always exist
    const firstPage = (
      <PaginationButton
        page={1}
        key={`pgnBtn${1}`}
        setCurrentPage={setCurrentPage}
      />
    );
    const itemsBelow = [
      <PaginationButton
        page={currentPage - 2}
        key={`pgnBtn${currentPage - 2}`}
        setCurrentPage={setCurrentPage}
      />,
      <PaginationButton
        page={currentPage - 1}
        key={`pgnBtn${currentPage - 1}`}
        setCurrentPage={setCurrentPage}
      />,
    ];
    // I want to include next two buttons, but return nothing if next page is above max page
    let itemsAbove = [];

    for (let index = currentPage; index < numberOfPages; index++) {
      const element = (
        <PaginationButton
          page={index + 1}
          key={`pgnBtn${index + 1}`}
          setCurrentPage={setCurrentPage}
        />
      );
      itemsAbove.push(element);
    }

    const layout = [
      firstPage,
      <PaginationFillerDots key="rel" />,
      ...itemsBelow,
      <PaginationButton
        page={currentPage}
        key={`main${currentPage}`}
        setCurrentPage={setCurrentPage}
        isCurrent={true}
      />,
      ...itemsAbove.slice(0, 2),
    ];
    return layout;
  };
  return (
    <div className="flex w-full p-2 " data-testid="pagination-container">
      {dynamicRenderButton()}
    </div>
  );
}

export default Pagination;
