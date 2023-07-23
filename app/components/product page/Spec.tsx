/**
 * The Spec component displays a single specification of the item, including its key and value.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Object} props.spec - An object representing the specification with a `key` and `value`.
 * @param {string} props.spec.key - The key of the specification.
 * @param {string} props.spec.value - The value of the specification.
 * @returns {JSX.Element} The JSX element representing the Spec component.
 */
type Props = {
  spec: {
    key: string;
    value: string;
  };
};

function Spec({ spec }: Props) {
  return (
    <div className="mb-3 flex rounded-md  bg-gray-200 p-2 text-sm text-gray-800">
      <p className="w-28 font-semibold">{spec.key}</p>
      <p className="flex items-center ">{spec.value}</p>
    </div>
  );
}

export default Spec;
