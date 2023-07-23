/**
 * Button for the pagination footer
 * Render JSX conditionally based on the current page
 *
 * @component
 *
 * @param {number} page - The page number for the button.
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentPage - The function to update the current page.
 * @param {boolean} isCurrent - Optional. Indicates whether the button represents the current page.
 *
 * @returns {JSX.Element} The JSX element representing the PaginationButton component.
 */
import { Dispatch, SetStateAction } from "react";
type Props = {
  page: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isCurrent?: boolean;
};

function PaginationButton({ page, isCurrent, setCurrentPage }: Props) {
  if (isCurrent === true) {
    return (
      <button className="rounded-sm bg-sky-500 px-4 py-2  text-white">
        {page}
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="rounded-sm bg-sky-600 px-4 py-2  text-white hover:bg-sky-800"
    >
      {page}
    </button>
  );
}

export default PaginationButton;
