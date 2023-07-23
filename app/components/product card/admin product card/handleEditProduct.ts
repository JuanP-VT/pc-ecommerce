/**
 * Calls the API endpoint with the edited product data to update the product in the database.
 *
 * @param {FormEvent<HTMLFormElement>} e - The form event triggered by form submission.
 * @param {ProductWithId} editedProduct - The edited product object containing updated information.
 * @param {AppRouterInstance} router - The Next.js AppRouterInstance used to refresh the page after editing.
 * @param {Dispatch<SetStateAction<boolean>>} [setIsLoading] - Optional state setter function to control loading animation in other React UI components.
 * @returns {Promise<void>} A Promise that resolves once the edit operation is completed.
 */
import { ProductWithId } from "@/app/types/product";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, FormEvent, SetStateAction } from "react";
export default async function handleEditProduct(
  e: FormEvent<HTMLFormElement>,
  editedProduct: ProductWithId,
  router: AppRouterInstance,
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) {
  e.preventDefault();
  //Start loading animation if one is provided
  if (setIsLoading) {
    setIsLoading(true);
  }

  const res = await fetch("/api/editproduct/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedProduct),
  });
  //stop animation once fetch is done
  if (setIsLoading) {
    setIsLoading(false);
  }
  router.refresh();
}
