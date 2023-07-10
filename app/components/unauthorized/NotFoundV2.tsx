import Image from "next/image";
import cartDog from "../../../public/images/cart.png";
type Props = {
  message: string;
};

function NotFoundV2({ message }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Image
        className="rounded-full shadow-md"
        width={300}
        height={300}
        src={cartDog}
        alt="Doberman"
      />
      <p className="mt-3 text-3xl font-bold">{message}</p>
    </div>
  );
}

export default NotFoundV2;
