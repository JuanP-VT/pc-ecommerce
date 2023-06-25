type Props = {};

function PaginationFillerDots({}: Props) {
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
