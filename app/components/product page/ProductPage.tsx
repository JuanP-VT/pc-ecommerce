import { ProductWithId } from "@/app/types/product";

type Props = {
  product: ProductWithId;
};

function ProductPage({ product }: Props) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex w-4/5 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 ">Img Frame</div>
        <div className="w-full lg:w-1/2">Info</div>
      </div>
      <div className="w-1/4 lg:w-1/5">pay</div>
    </div>
  );
}

export default ProductPage;
