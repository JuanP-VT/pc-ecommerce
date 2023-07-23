/**
 * The ProductAbout component displays information about the item by rendering multiple "About" components.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.description - An array of strings representing the description of the item.
 * @returns {JSX.Element} The JSX element representing the ProductAbout component.
 */
import About from "./About";

type Props = {
  description: string[];
};

function ProductAbout({ description }: Props) {
  return (
    <div className="mt-3 flex flex-col justify-center p-2">
      <p className="mb-2  font-semibold ">About This Item</p>
      <div className="flex flex-col">
        {description.map((str, index) => (
          <About description={str} key={`spec${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductAbout;
