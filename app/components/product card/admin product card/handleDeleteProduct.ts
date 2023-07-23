/**
 * Calls the API endpoint with the object { _id: dbId } to delete the product from the database.
 *
 * @param {MouseEvent} e - The mouse event triggering the delete action.
 * @param {string} dbId - The ID of the product to be deleted from the database.
 * @param {Dispatch<SetStateAction<boolean>>} [setIsLoading] - Optional state setter function to control loading animation in other React UI components.
 * @param {AppRouterInstance} [router] - Optional Next.js AppRouterInstance to refresh the page after deletion.
 * @returns {Promise<void>} A Promise that resolves once the delete operation is completed.
 */
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, MouseEvent, SetStateAction } from "react";
export default async function handleDeleteProduct(
  e: MouseEvent,
  dbId: string,
  setIsLoading?: Dispatch<SetStateAction<boolean>>,
  router?: AppRouterInstance
) {
  e.preventDefault();
  //Start loading animation if one is provided
  if (setIsLoading) {
    setIsLoading(true);
  }

  const res = await fetch("/api/deleteproduct/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: dbId }),
  });
  //stop animation once fetch is done
  if (setIsLoading) {
    setIsLoading(false);
  }
  if (router) {
    router.refresh();
  }
}
