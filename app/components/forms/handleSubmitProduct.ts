import type { Product } from "../../types/product";
import { FormEvent } from "react";
import validateNewProduct from "../../utils/validateProduct";
export default async function handleSubmitProduct(
  e: FormEvent<HTMLFormElement>,
  product: Product
) {
  e.preventDefault();
  // Create New Product Object
  const newProduct: Product = {
    name: product.name,
    category: product.category,
    img: product.img,
    description: product.description,
    price: product.price,
    stock: product.stock,
    discountPercentage: product.discountPercentage,
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
  if (res.status !== 400) {
    const pElement = document.querySelector(
      "#formSuccess"
    ) as HTMLParagraphElement;
    pElement.classList.remove("hidden");
    setTimeout(() => {
      pElement.classList.add("hidden");
      document.forms[0].reset();
    }, 2000);
  }
}
