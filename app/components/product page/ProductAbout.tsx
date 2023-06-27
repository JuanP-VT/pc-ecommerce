import Spec from "./Spec";

type Props = {
  description: string[];
};

function ProductAbout({ description }: Props) {
  return (
    <div className="mt-5 flex flex-col justify-center p-2">
      <p className="p-1 text-xl font-bold">About This Item</p>
      <div className="flex flex-col">
        {description.map((str, index) => (
          <Spec description={str} key={`spec${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductAbout;
