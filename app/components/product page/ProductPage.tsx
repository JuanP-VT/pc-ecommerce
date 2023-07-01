import { ProductWithId } from "@/app/types/product";
import ImageFrame from "./ImageFrame";
import CardPrice from "../product card/store product card/CardPrice";
import ProductAbout from "./ProductAbout";
import StockTag from "../product card/store product card/StockTag";
import AddToCartSection from "./AddToCartSection";
import Description from "./Description";

type Props = {
  product: ProductWithId;
};

function ProductPage({ product }: Props) {
  return (
    <div className=" flex w-full flex-col md:flex-row">
      <div className=" relative  flex flex-col md:w-4/6 lg:w-3/4 lg:flex-row">
        <ImageFrame images={product.img} />
        <Description product={product} />
      </div>
      <AddToCartSection product={product} />
    </div>
  );
}

export default ProductPage;
