/**
 * Spec Input Component
 *
 * The component renders a set of input fields for a single product specification (key-value pair).
 * It allows users to enter the key and value for the specification.
 * The `mode` prop determines the layout mode of the input fields (column or row).
 * The component updates the product specification state when the input values change.
 *
 * @param {number} index - The index of the product specification in the array of specifications.
 * @param {React.Dispatch<React.SetStateAction<Spec[]>>} setSpecs - Function to update the array of specifications.
 * @param {Spec[]} productSpecs - The current array of product specifications.
 * @param {React.Dispatch<React.SetStateAction<Spec[]>>} setProductSpecs - Function to update the array of product specifications.
 * @param {"col" | "row"} mode - The layout mode of the input fields (column or row).
 *
 * @returns {JSX.Element} The JSX element representing the Spec Input component.
 */
import { Spec } from "@/app/types/product";
import React, { useState } from "react";

type Props = {
  index: number;
  setSpecs: React.Dispatch<React.SetStateAction<Spec[]>>;
  productSpecs: Spec[];
  setProductSpecs: React.Dispatch<React.SetStateAction<Spec[]>>;
  mode: "col" | "row";
};

function SpecInput({
  index,
  setSpecs,
  productSpecs,
  setProductSpecs,
  mode,
}: Props) {
  const [newSpec, setNewSpec] = useState<Spec>({
    key: productSpecs[index]?.key ?? "",
    value: productSpecs[index]?.value ?? "",
  });
  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedKey = e.currentTarget.value;
    setNewSpec((prevSpec) => ({ ...prevSpec, key: updatedKey }));
    const updatedSpecs = [...productSpecs];
    updatedSpecs[index] = { ...newSpec, key: updatedKey };
    setSpecs(updatedSpecs);
    setProductSpecs(updatedSpecs);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.currentTarget.value;
    setNewSpec((prevSpec) => ({ ...prevSpec, value: updatedValue }));
    const updatedSpecs = [...productSpecs];
    updatedSpecs[index] = { ...newSpec, value: updatedValue };
    setSpecs(updatedSpecs);
    setProductSpecs(updatedSpecs);
  };

  return (
    <div className={`flex flex-col text-sm font-semibold`}>
      <label className="block">Spec</label>
      <div className={`flex flex-${mode} p-1`}>
        <input
          className="focus:shadow-outline  appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow 
          placeholder:text-sm focus:outline-none"
          type="text"
          placeholder="key"
          onChange={(e) => handleKeyChange(e)}
          defaultValue={productSpecs[index]?.key ?? ""}
        />
        <input
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 text-sm leading-tight  text-gray-700 shadow 
          focus:outline-none"
          type="text"
          placeholder="value"
          onChange={(e) => handleValueChange(e)}
          defaultValue={productSpecs[index]?.value ?? ""}
        />
      </div>
    </div>
  );
}

export default SpecInput;
