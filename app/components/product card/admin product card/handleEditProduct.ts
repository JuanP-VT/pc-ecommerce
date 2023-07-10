import { ProductWithId } from "@/app/types/product";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, FormEvent, SetStateAction } from "react";
//This function is called in the AdminProductCardEdit component
//It takes a product and sends it to the API
//If given a setIsLoading react hook function it will
// set to loading when the function is called and stop when the fetch is done
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
