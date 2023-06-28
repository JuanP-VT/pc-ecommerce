import About from "./About";

type Props = {
  description: string[];
};

function ProductAbout({ description }: Props) {
  return (
    <div className="mt-3 flex flex-col justify-center p-2">
      <p className="mb-2  font-semibold ">About This Item</p>
      <div className="flex flex-col">
        {description.map((str, index) => (
          <About description={str} key={`spec${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductAbout;
