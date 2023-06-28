import { Spec as SpecType } from "@/app/types/product";
import React from "react";
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
