import React from "react";

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
