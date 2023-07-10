/**
 * this code allows the user to select a star rating by clicking on the stars, and it displays
 * the selected stars in yellow and the unselected stars in a lighter shade of yellow
 */
"use client";
import { StarIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction } from "react";
type StarProps = {
  setStarRating: Dispatch<SetStateAction<number>>;
  starRating: number;
};
//Icon of a highlighted star
export function StarOn({ setStarRating, starRating }: StarProps) {
  return (
    <StarIcon
      data-testid={`starOn${starRating}`}
      className="h-8 w-8 cursor-pointer fill-yellow-400"
      onClick={() => setStarRating(starRating)}
    />
  );
}
//Icon of a opaque star
export function StarOff({ setStarRating, starRating }: StarProps) {
  return (
    <StarIcon
      data-testid={`starOff${starRating}`}
      className="h-8 w-8 cursor-pointer fill-yellow-200"
      onClick={() => setStarRating(starRating)}
    />
  );
}
type Props = {
  starRating: number;
  setStarRating: Dispatch<SetStateAction<number>>;
};
// Returns an array of star icons
function StarInput({ starRating, setStarRating }: Props) {
  const renderStars = () => {
    // push highlighted stars first
    const items = [];
    for (let index = 0; index < starRating; index++) {
      const element = (
        <StarOn
          starRating={index + 1}
          setStarRating={setStarRating}
          key={`star${index}`}
        />
      );
      items.push(element);
    }
    //fill remaining stars
    if (items.length < 5) {
      for (let index = items.length; index < 5; index++) {
        const element = (
          <StarOff
            setStarRating={setStarRating}
            starRating={index + 1}
            key={`star${index}`}
          />
        );
        items.push(element);
      }
    }
    return items;
  };
  return (
    <div className="flex py-3" data-testid="starInput">
      {renderStars()}
    </div>
  );
}

export default StarInput;
