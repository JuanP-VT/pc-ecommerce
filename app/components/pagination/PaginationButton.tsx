/**
 * Button for the pagination footer
 * Render JSX conditionally based on the current page
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
      <button
        onClick={() => setCurrentPage(page)}
        className="rounded-sm bg-sky-500 px-4 py-2  text-white hover:bg-sky-800"
      >
        {page}
      </button>
    );
  }
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className="rounded-sm bg-sky-600 px-4 py-2  text-white hover:bg-sky-800"
    >
      {page}
    </button>
  );
}

export default PaginationButton;
