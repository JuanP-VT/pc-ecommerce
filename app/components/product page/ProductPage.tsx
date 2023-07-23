/**
 * This is the ProductPage component that represents a page displaying details of a product.
 *
 * @param {Props} props - The props passed to the ProductPage component.
 * @param {ProductWithId} props.product - The product object with additional ID field.
 * @param {Session | null | undefined} [props.session] - The session object representing the user's authentication status.
 *
 * @returns {JSX.Element} Returns the JSX element representing the product page.
 */
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
  // checks if the product has any reviews.
  // If the reviews object is not undefined and it has at least one item,
  // then the productHasReviews variable is set to true.
  // Otherwise, it is set to false.
  const productHasReviews =
    reviews !== undefined && reviews.length !== 0 ? true : false;
  const reqUser = { _id: session?.user._id };
  //Fetch product data
  useEffect(() => {
    async function callApi() {
      const req = await fetch("/api/searchuser", {
        method: "POST",
        body: JSON.stringify(reqUser),
      });
      const res = (await req.json()) as User | null;
      setCanReview(userCanReview(product, res));
    }
    callApi();
  }, []);
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
          <ReviewForm
            router={router}
            product={product}
            session={session}
            setCanReview={setCanReview}
          />
        </div>
      ) : (
        ""
      )}
      {productHasReviews ? (
        <div className="flex flex-col px-5 sm:px-20 ">
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
