import { BackspaceIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";
type Props = {
  id: string;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};

function CardHeader({ id, setIsOnEditMode }: Props) {
  return (
    <div className="flex justify-end w-full p-2 gap-2">
      <BackspaceIcon className="w-7 hover:scale-105 transition-transform cursor-pointer" />
      <PencilSquareIcon
        className="w-7 hover:scale-105 transition-transform cursor-pointer"
        onClick={() => setIsOnEditMode((prevState) => !prevState)}
      />
    </div>
  );
}

export default CardHeader;
