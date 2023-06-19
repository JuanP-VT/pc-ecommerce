import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, MouseEvent, SetStateAction } from "react";
/**
 * Calls API endpoint with object {_id:dbId} to delete product from database
 * setIsLoading is for other React UI components ,
 */
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
