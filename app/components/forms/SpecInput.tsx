import { ProductWithId, Spec } from "@/app/types/product";
import React, { useEffect, useState } from "react";

type Props = {
  index: number;
  specs: Spec[];
  setSpecs: React.Dispatch<React.SetStateAction<Spec[]>>;
  product?: ProductWithId;
};

function SpecInput({ index, specs, setSpecs, product }: Props) {
  const [newSpec, setNewSpec] = useState<Spec>({ key: "", value: "" });

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedKey = e.currentTarget.value;
    setNewSpec((prevSpec) => ({ ...prevSpec, key: updatedKey }));
    const updatedSpecs = [...specs];
    updatedSpecs[index] = { ...newSpec, key: updatedKey };
    setSpecs(updatedSpecs);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.currentTarget.value;
    setNewSpec((prevSpec) => ({ ...prevSpec, value: updatedValue }));
    const updatedSpecs = [...specs];
    updatedSpecs[index] = { ...newSpec, value: updatedValue };
    setSpecs(updatedSpecs);
  };
  return (
    <div className="flex">
      <input
        className="focus:shadow-outline  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        placeholder="key"
        onChange={handleKeyChange}
        defaultValue={product?.specs[index].key ?? ""}
      />
      <input
        className="focus:shadow-outline  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        placeholder="value"
        onChange={handleValueChange}
        defaultValue={product?.specs[index].value ?? ""}
      />
    </div>
  );
}

export default SpecInput;
