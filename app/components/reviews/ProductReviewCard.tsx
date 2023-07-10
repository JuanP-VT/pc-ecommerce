/* eslint-disable @next/next/no-img-element */
import { Review } from "@/app/types/product";
import StarRating from "./StarRating";
type Props = {
  review: Review;
};

function ProductReviewCard({ review }: Props) {
  return (
    <div className="mb-3 flex flex-col rounded-md border p-5 shadow-md xl:px-52">
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
      <p className="p-3  " style={{ whiteSpace: "pre-wrap" }}>
        {review.comment}
      </p>
    </div>
  );
}

export default ProductReviewCard;
