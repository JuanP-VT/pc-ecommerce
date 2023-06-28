/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import FrameButton from "./FrameButton";
type Props = {
  images: string[];
};

function ImageFrame({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex w-full p-5">
      <div className=" relative mr-2  flex flex-col border-r">
        <div className="sticky top-14 ">
          {images.map((str, index) => (
            <FrameButton
              image={str}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              index={index}
              key={`frame${index}`}
            />
          ))}
        </div>
      </div>
      <div className=" relative flex h-full w-full object-contain">
        <img
          src={images[currentIndex]}
          alt="product image"
          className="sticky top-20 h-min w-min object-contain"
        />
      </div>
    </div>
  );
}

export default ImageFrame;
