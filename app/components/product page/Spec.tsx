import React from "react";

type Props = {
  description: string;
};

function Spec({ description }: Props) {
  return (
    <li className="text-md mb-1 text-justify font-sans font-medium">
      {description}
    </li>
  );
}

export default Spec;
