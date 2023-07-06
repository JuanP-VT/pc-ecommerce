"use client";
import React, { useEffect, useState } from "react";
import StarInput from "./StarInput";
import { Review } from "@/app/types/product";
import { Session } from "next-auth";
import { User } from "@/app/types/user";
import handleSendReview from "./handleSendReview";
import LoadingButton from "../buttons/LoadingButton";

type Props = {
  session: Session;
};

function ReviewForm({ session }: Props) {
  const [starRating, setStarRating] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const user: User = {
    _id: session.user._id ?? "",
    cash: session.user.cash,
    email: session.user.email ?? "",
    image: session.user.image ?? "",
    items: session.user.items ?? [],
    name: session.user.name ?? "",
    rol: session.user.name ?? "user",
  };
  const [review, setReview] = useState<Review>({
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
  console.log(review);
  return (
    <div className="ml-20 mt-5 flex ">
      <form
        className="flex flex-col"
        onSubmit={() => handleSendReview(review, setIsLoading)}
      >
        <StarInput starRating={starRating} setStarRating={setStarRating} />
        <div className="mb-4 ">
          <label className="mb-2 block text-sm  font-thin text-gray-700">
            Title
          </label>
          <input
            className="focus:shadow-outline w-full  appearance-none rounded
             border px-3 py-2 font-thin leading-tight text-gray-700 shadow
             focus:outline-none"
            type="text"
            placeholder="Use few words"
            onChange={(e) =>
              setReview({ ...review, title: e.currentTarget.value })
            }
          ></input>
        </div>
        <div className="mb-4 ">
          <label className="mb-2 block text-sm  font-thin text-gray-700">
            Review
          </label>
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
