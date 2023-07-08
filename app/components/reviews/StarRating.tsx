/**
 * this code allows the user to select a star rating by clicking on the stars, and it displays
 * the selected stars in yellow and the unselected stars in a lighter shade of yellow
 */
"use client";
import { StarIcon } from "@heroicons/react/20/solid";
type StarProps = {
  starRating: number;
};
//Icon of a highlighted star
export function StarOn({ starRating }: StarProps) {
  return (
    <StarIcon
      data-testid={`starOn${starRating}`}
      className="h-8 w-8 cursor-pointer fill-yellow-400"
    />
  );
}
//Icon of a opaque star
export function StarOff({ starRating }: StarProps) {
  return (
    <StarIcon
      data-testid={`starOff${starRating}`}
      className="h-8 w-8 cursor-pointer fill-yellow-100"
    />
  );
}
type Props = {
  starRating: number;
};
// Returns an array of star icons
function StarRating({ starRating }: Props) {
  const renderStars = () => {
    // push highlighted stars first
    const items = [];
    for (let index = 0; index < starRating; index++) {
      const element = <StarOn starRating={index + 1} key={`star${index}`} />;
      items.push(element);
    }
    //fill remaining stars
    if (items.length < 5) {
      for (let index = items.length; index < 5; index++) {
        const element = <StarOff starRating={index + 1} key={`star${index}`} />;
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

export default StarRating;
