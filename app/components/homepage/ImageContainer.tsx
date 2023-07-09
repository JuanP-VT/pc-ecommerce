import { title } from "process";

type Props = {
  imageUrl: string;
  title: string;
  subtile: string;
};

export default function ImageContainer({ imageUrl, title, subtile }: Props) {
  return (
    <div
      className="relative flex  flex-col  items-center bg-gradient-to-r bg-no-repeat text-white"
      style={{
        height: "650px",
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
    >
      <p className="mt-20 text-center text-2xl font-bold md:text-5xl">
        {title}
      </p>
      <p className="text-center text-lg md:text-2xl">{subtile}</p>
    </div>
  );
}
