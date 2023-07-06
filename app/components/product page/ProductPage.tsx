"use client";
import { ProductWithId } from "@/app/types/product";
import ImageFrame from "./ImageFrame";
import AddToCartSection from "./AddToCartSection";
import Description from "./Description";
import { Session } from "next-auth";
import userCanReview from "@/app/utils/userCanReview";
import ReviewForm from "../reviews/ReviewForm";
import { useRouter } from "next/navigation";
type Props = {
  product: ProductWithId;
  session?: Session | null;
};

function ProductPage({ product, session }: Props) {
  console.log(product, session);
  const router = useRouter();
  const canReview = userCanReview(product, session);
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
        <div>Cannot review</div>
      )}
    </>
  );
}

export default ProductPage;
