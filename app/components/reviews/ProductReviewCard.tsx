/**
 * The ProductReviewCard component takes a review prop, which is an object that represents a product review.
 * The component uses the review prop to get the user's name, the star rating of the review, the title of the review, and the comment of the reviewer.
 *
 * @component
 *
 * @param {Review} review - The review object representing the product review.
 *
 * @returns {JSX.Element} The JSX element representing the ProductReviewCard component.
 */
import { Review } from "@/app/types/product";
import StarRating from "./StarRating";
import Image from "next/image";
type Props = {
  review: Review;
};

function ProductReviewCard({ review }: Props) {
  return (
    <div className="mb-3 flex flex-col rounded-md border p-5 shadow-md xl:px-52">
      <div className="ml-3 flex flex-col sm:flex-row">
        <Image
          alt="user profile picture"
          src={review.user.image}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="ml-3 flex items-center justify-center overflow-hidden text-lg font-bold">
          {review.user.name}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex pl-2">
          <StarRating starRating={review.stars} />
        </div>
        <p className="ml-3 flex items-center justify-center text-lg font-bold">
          {review.title}
        </p>
      </div>
      <p
        className="p-3  text-sm sm:text-base"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {review.comment}
      </p>
    </div>
  );
}

export default ProductReviewCard;
