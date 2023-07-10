"use client";
import { ProductWithId } from "@/app/types/product";
import ImageFrame from "./ImageFrame";
import AddToCartSection from "./AddToCartSection";
import Description from "./Description";
import { Session } from "next-auth";
import userCanReview from "@/app/utils/userCanReview";
import ReviewForm from "../reviews/ReviewForm";
import { useRouter } from "next/navigation";
import ProductReviewCard from "../reviews/ProductReviewCard";
import { useEffect, useState } from "react";
import { User } from "@/app/types/user";
type Props = {
  product: ProductWithId;
  session?: Session | null;
};

function ProductPage({ product, session }: Props) {
  const [canReview, setCanReview] = useState(false);
  const router = useRouter();
  const reviews = product.reviews;
  const productHasReviews =
    reviews !== undefined && reviews.length !== 0 ? true : false;
  const reqUser = { _id: session?.user._id };
  useEffect(() => {
    async function callApi() {
      const req = await fetch("/api/searchuser", {
        method: "POST",
        body: JSON.stringify(reqUser),
      });
      const res = (await req.json()) as User | null;
      console.log(res);
      setCanReview(userCanReview(product, res));
    }
    callApi();
  }, [product, reqUser]);
  return (
    <>
      <div className=" flex w-full flex-col  md:flex-row">
        <div className=" relative  flex flex-col md:w-4/6 lg:w-3/4 lg:flex-row">
          <ImageFrame images={product.img} />
          <Description product={product} />
        </div>
        <AddToCartSection product={product} session={session} />
      </div>
      {canReview && session ? (
        <div className="flex ">
          <ReviewForm router={router} product={product} session={session} />
        </div>
      ) : (
        ""
      )}
      {productHasReviews ? (
        <div className="flex flex-col px-20 ">
          <h1 className="py-3 text-2xl font-bold">User Reviews</h1>
          {product.reviews?.map((review, index) => (
            <ProductReviewCard review={review} key={`reviewCard${index}`} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductPage;
