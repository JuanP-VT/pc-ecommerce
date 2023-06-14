import { Product } from "../../types/product";
import validateNewProduct from "../../utils/validateProduct";
import React from "react";

type Props = {
  newProduct: Product;
};

function FormFeedback({ newProduct }: Props) {
  const errors = validateNewProduct(newProduct);
  if (errors.length > 0) {
  }
  return (
    <>
      <ol>
        {errors.map((err, index) => (
          <li className="text-red-600" key={`i${index}`}>
            {err}
          </li>
        ))}
      </ol>
    </>
  );
}

export default FormFeedback;
