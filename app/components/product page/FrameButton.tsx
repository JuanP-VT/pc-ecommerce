/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction } from "react";
/*
 * Conditionally returns JSX based on current index,
 * Highlights the currently displayed image frame
 */
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
        className="mb-2  h-16  w-16 cursor-pointer overflow-hidden rounded-md 
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
