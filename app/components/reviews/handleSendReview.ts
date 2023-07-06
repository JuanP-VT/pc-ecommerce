import { Review } from "@/app/types/product";
import createAuthHeader from "@/app/utils/createAuthHeader";

export default async function handleSendReview(
  review: Review,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsLoading(true);
  const authHeader = createAuthHeader(review.user._id);
  const send = await fetch("/api/review", {
    body: JSON.stringify(""),
    cache: "no-cache",
    headers: {
      ...authHeader,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const res = await send.json();
  setIsLoading(false);
}
