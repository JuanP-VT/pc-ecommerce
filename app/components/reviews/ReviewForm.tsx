/**
 * The ReviewForm component allows users who have purchased the product to submit a review.
 * The ReviewForm component uses the StarInput component to get the user's star rating for the product
 *
 * This component submits a ReviewRequest (check types), to the review api service
 */
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import StarInput from "./StarInput";
import { ProductWithId, ReviewRequest } from "@/app/types/product";
import { Session } from "next-auth";
import { UserRef } from "@/app/types/user";
import handleSendReview from "./handleSendReview";
import LoadingButton from "../buttons/LoadingButton";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

type Props = {
  session: Session;
  product: ProductWithId;
  router: AppRouterInstance;
  setCanReview: Dispatch<SetStateAction<boolean>>;
};

function ReviewForm({ session, product, router, setCanReview }: Props) {
  const [starRating, setStarRating] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const user: UserRef = {
    _id: session.user._id ?? "",
    email: session.user.email ?? "",
    image: session.user.image ?? "",
    name: session.user.name ?? "",
    rol: session.user.rol ?? "user",
  };
  // Save review object in state
  const [review, setReview] = useState<ReviewRequest>({
    productId: product._id,
    stars: 1,
    title: "",
    comment: "",
    user,
  });
  //StarRating can only be 1,2,3,4 or 5
  useEffect(() => {
    if (
      starRating === 1 ||
      starRating === 2 ||
      starRating === 3 ||
      starRating === 4 ||
      starRating === 5
    ) {
      setReview((prevState) => ({ ...prevState, stars: starRating }));
    }
  }, [starRating]);
  return (
    <div className=" ml-5 mt-5 flex w-full">
      <form
        className="flex w-full flex-col p-10"
        onSubmit={(e) =>
          handleSendReview(e, review, setIsLoading, router, setCanReview)
        }
      >
        <StarInput starRating={starRating} setStarRating={setStarRating} />
        <div className="mb-4 ">
          <label className="mb-2 block text-sm  text-gray-700">Title</label>
          <input
            className="focus:shadow-outline w-full  appearance-none rounded
             border px-3 py-2 leading-tight text-gray-700 shadow
             focus:outline-none"
            type="text"
            placeholder="Use few words"
            onChange={(e) =>
              setReview({ ...review, title: e.currentTarget.value })
            }
          ></input>
        </div>
        <div className="mb-4 ">
          <label className="mb-2 block text-sm  text-gray-700">Review</label>
          <textarea
            className="w-full border p-2 shadow-md"
            name=""
            id=""
            rows={10}
            onChange={(e) =>
              setReview({ ...review, comment: e.currentTarget.value })
            }
          ></textarea>
        </div>
        <LoadingButton
          isLoading={isLoading}
          text="Send My Review"
          type="submit"
        />
      </form>
    </div>
  );
}

export default ReviewForm;
