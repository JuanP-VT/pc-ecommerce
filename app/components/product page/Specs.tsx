/**
 * The Specs component displays a list of specifications for the item by rendering multiple "Spec" components.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {SpecType[]} props.specList - An array of SpecType objects representing the list of specifications for the item.
 * @returns {JSX.Element} The JSX element representing the Specs component.
 */
import { Spec as SpecType } from "@/app/types/product";
import Spec from "./Spec";

type Props = {
  specList: SpecType[];
};

function Specs({ specList }: Props) {
  return (
    <div className="mt-5 flex flex-col">
      <div className="flex flex-col">
        {specList.map((spec, index) => (
          <Spec spec={spec} key={`sp${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Specs;
