/**
 * Component to represent filler dots in the pagination footer.
 *
 * @component
 *
 * @returns {JSX.Element} The JSX element representing the PaginationFillerDots component.
 */
function PaginationFillerDots() {
  return (
    <button
      data-testid="dots"
      className="rounded-sm bg-sky-600 px-4 py-2  text-white hover:bg-sky-800"
    >
      ....
    </button>
  );
}

export default PaginationFillerDots;
