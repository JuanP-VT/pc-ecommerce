import { ProductWithId, Review } from "@/app/types/product";
import createAuthHeader from "@/app/utils/createAuthHeader";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function handleSendReview(
  e: React.FormEvent<HTMLFormElement>,
  review: Review,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  router: AppRouterInstance
) {
  e.preventDefault();
  setIsLoading(true);
  const authHeader = createAuthHeader(review.user._id);
  const send = await fetch("/api/review", {
    body: JSON.stringify(review),
    headers: {
      ...authHeader,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  await send.json();
  router.refresh();
}
