/**
 * The About component displays a single item in a list,  used to represent a description.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.description - The text to be displayed as the description or bullet point.
 * @returns {JSX.Element} The JSX element representing the About component.
 */
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
