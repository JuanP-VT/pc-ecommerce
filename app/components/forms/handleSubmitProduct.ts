import type { Product } from "../../types/product";
import { Dispatch, FormEvent, SetStateAction } from "react";
import validateNewProduct from "../../utils/validateProduct";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
//This function is called in the NewProductForm component
//It takes a product and sends it to the API
//If given a setIsLoading react hook function it will
// set to loading when the function is called and stop when the fetch is done
// At the end i use a querySelector to hide and show div feedback
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
