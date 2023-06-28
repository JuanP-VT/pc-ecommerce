import React from "react";

type Props = {
  description: string;
};

function About({ description }: Props) {
  return (
    <li className="font-sm mb-3 flex items-center rounded-md bg-gray-200 p-2 text-justify font-sans text-sm">
      <span className="marker mr-2 text-2xl">•</span>
      {description}
    </li>
  );
}

export default About;
