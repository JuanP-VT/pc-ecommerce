"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import StarInput from "./StarInput";
import { ProductWithId, Review, ReviewRequest } from "@/app/types/product";
import { Session } from "next-auth";
import { User, UserRef } from "@/app/types/user";
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
  const [review, setReview] = useState<ReviewRequest>({
    productId: product._id,
    stars: 1,
    title: "",
    comment: "",
    user,
  });
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
    <div className="ml-20 mt-5 flex ">
      <form
        className="flex flex-col"
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
            className="border p-2 shadow-md"
            name=""
            id=""
            cols={100}
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
