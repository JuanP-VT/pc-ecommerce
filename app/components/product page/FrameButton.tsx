/**
 * The FrameButton component conditionally returns JSX based on the current index and highlights the currently displayed image frame.
 * 
 * @component
 *
 * @param {Object} props - The component props.
 * @param {number} props.currentIndex - The index of the currently displayed image frame.
 * @param {Dispatch<SetStateAction<number>>} props.setCurrentIndex - The state setter function to update the current index.
 * @param {string} props.image - The image URL for the frame button.
 * @param {number} props.index - The index of the frame button.
 * @returns {JSX.Element} The JSX element representing the FrameButton component.
 */
/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction } from "react";

type Props = {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  image: string;
  index: number;
};

function FrameButton({ currentIndex, image, setCurrentIndex, index }: Props) {
  //Highlight frame if index === current index
  if (currentIndex === index) {
    return (
      <img
        className="sticky  mb-2  h-16 w-16 cursor-pointer overflow-hidden rounded-md
            border border-sky-500 object-contain hover:border-sky-500 hover:shadow-sm
            hover:shadow-sky-300"
        src={image}
        onClick={() => setCurrentIndex(index)}
        alt="sidebar image frame"
        key={`sd${index}`}
      />
    );
  }
  return (
    <img
      className="border-grey  mb-2  h-16 w-16 cursor-pointer overflow-hidden 
    rounded-md border object-contain hover:border-sky-500 hover:shadow-sm
    hover:shadow-sky-300"
      src={image}
      onClick={() => setCurrentIndex(index)}
      alt="sidebar image frame"
      key={`sd${index}`}
    />
  );
}

export default FrameButton;
