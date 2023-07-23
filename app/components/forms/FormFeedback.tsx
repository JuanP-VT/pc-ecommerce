/**
 * Form Feedback Component
 *
 * @param {Props} props - The props object containing the newProduct to be validated.
 *
 * This component validates the newProduct using the validateNewProduct function.
 * It displays a list of errors, if any, returned from the validation process.
 *
 * @returns {JSX.Element} The JSX element representing the Form Feedback component.
 */
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
