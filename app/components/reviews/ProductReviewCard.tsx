/* eslint-disable @next/next/no-img-element */
import { Review } from "@/app/types/product";
import StarRating from "./StarRating";
type Props = {
  review: Review;
};

function ProductReviewCard({ review }: Props) {
  return (
    <div className="flex flex-col rounded-md border p-3 shadow-md lg:px-20">
      <div className="ml-3 flex">
        <img
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
      <div className="flex">
        <div className="flex">
          <StarRating starRating={review.stars} />
        </div>
        <p className="ml-3 flex items-center justify-center text-lg font-bold">
          {review.title}
        </p>
      </div>
      <p className="px-2" style={{ whiteSpace: "pre-line" }}>
        {review.comment}
      </p>
    </div>
  );
}

export default ProductReviewCard;
