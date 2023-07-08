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
type Props = {
  product: ProductWithId;
  session?: Session | null;
};

function ProductPage({ product, session }: Props) {
  const router = useRouter();
  const canReview = userCanReview(product, session);
  const productHasReviews = product.reviews?.length === 0 ? false : true;
  return (
    <>
      <div className=" flex w-full flex-col md:flex-row">
        <div className=" relative  flex flex-col md:w-4/6 lg:w-3/4 lg:flex-row">
          <ImageFrame images={product.img} />
          <Description product={product} />
        </div>
        <AddToCartSection product={product} />
      </div>
      {canReview && session ? (
        <div className="h-96">
          <ReviewForm router={router} product={product} session={session} />
        </div>
      ) : (
        ""
      )}
      {productHasReviews ?? (
        <div className="flex flex-col px-5 lg:px-20">
          <h1 className="py-3 text-2xl font-bold">User Reviews</h1>
          {product.reviews?.map((review, index) => (
            <ProductReviewCard review={review} key={`reviewCard${index}`} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductPage;
