import { Product, ProductWithId } from "../../../types/product";
import CardHeader from "../CardHeader";
import { Dispatch, SetStateAction } from "react";

type Props = {
  product: ProductWithId;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};
function AdminProductCardDisplay({ product, setIsOnEditMode }: Props) {
  return (
    <div className="w-80 flex border">
      <CardHeader id={product._id} setIsOnEditMode={setIsOnEditMode} />
    </div>
  );
}

export default AdminProductCardDisplay;
