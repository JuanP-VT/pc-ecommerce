"use client";
import { StarIcon } from "@heroicons/react/20/solid";
/**
 * StarOn component represents a highlighted (filled) star icon.
 *
 * @param {Object} props - The props passed to the component.
 * @param {number} props.starRating - The value representing the star's rating.
 * @returns {JSX.Element} - The JSX element representing the highlighted star icon.
 */
type StarProps = {
  starRating: number;
};
export function StarOn({ starRating }: StarProps) {
  return (
    <StarIcon
      data-testid={`starOn${starRating}`}
      className="h-8 w-8 cursor-pointer fill-yellow-400"
    />
  );
}
/**
 * StarOff component represents an opaque (unfilled) star icon.
 *
 * @param {Object} props - The props passed to the component.
 * @param {number} props.starRating - The value representing the star's rating.
 * @returns {JSX.Element} - The JSX element representing the opaque star icon.
 */
export function StarOff({ starRating }: StarProps) {
  return (
    <StarIcon
      data-testid={`starOff${starRating}`}
      className="h-8 w-8 cursor-pointer fill-yellow-200"
    />
  );
}
type Props = {
  starRating: number;
};
/**
 * StarRating component allows the user to select a star rating by clicking on the stars.
 * It displays the selected stars in yellow (highlighted) and the unselected stars in a lighter shade of yellow (opaque).
 *
 * @param {Object} props - The props passed to the component.
 * @param {number} props.starRating - The current star rating value.
 * @returns {JSX.Element} - The JSX element representing the star rating component.
 */
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
