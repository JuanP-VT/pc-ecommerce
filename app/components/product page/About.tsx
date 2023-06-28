import React from "react";

type Props = {
  description: string;
};

function About({ description }: Props) {
  return (
    <li className="font-sm mb-3 rounded-md bg-gray-200 text-justify font-sans text-sm">
      {description}
    </li>
  );
}

export default About;
