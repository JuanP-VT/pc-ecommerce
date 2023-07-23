/**
 * Handle Submit Product Function
 *
 * @param {FormEvent<HTMLFormElement>} e - The form submit event.
 * @param {Product} product - The product object to be sent to the API.
 * @param {AppRouterInstance} router - The Next.js router instance.
 * @param {Dispatch<SetStateAction<boolean>>} setIsLoading - Optional React state function to handle loading state.
 *
 * This function is called in the NewProductForm component to submit a product to the API.
 * If the setIsLoading function is provided, it sets it to loading when the function is called and stops when the fetch is done.
 * The function validates the product data and sends it to the API using a POST request.
 * If the request is successful (status code other than 400), it shows a success message using querySelector.
 * After a short delay, it navigates to the "/admin" page using the router.
 *
 * @returns {Promise<string[]> | void} An array of validation errors or void if successful.
 */
import type { Product } from "../../types/product";
import { Dispatch, FormEvent, SetStateAction } from "react";
import validateNewProduct from "../../utils/validateProduct";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
export default async function handleSubmitProduct(
  e: FormEvent<HTMLFormElement>,
  product: Product,
  router: AppRouterInstance,
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) {
  e.preventDefault();
  if (setIsLoading) {
    setIsLoading(true);
  }
  // Create New Product Object
  const newProduct: Product = {
    name: product.name,
    category: product.category,
    img: product.img,
    description: product.description,
    price: product.price,
    stock: product.stock,
    discountPercentage: product.discountPercentage,
    specs: product.specs,
  };
  const errors = validateNewProduct(newProduct);
  if (errors.length > 0) {
    return errors;
  }
  const res = await fetch("/api/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  const data = await res.json();
  //Send feedback, old school query selector
  if (setIsLoading) {
    setIsLoading(false);
  }
  if (res.status !== 400) {
    const pElement = document.querySelector(
      "#formSuccess"
    ) as HTMLParagraphElement;
    pElement.classList.remove("hidden");
    setTimeout(() => {
      pElement.classList.add("hidden");
      router.push("/admin");
    }, 1000);
  }
}
