import { BackspaceIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import handleDeleteProduct from "./admin product card/handleDeleteProduct";
type Props = {
  id: string;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};

function CardHeader({ id, setIsOnEditMode }: Props) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex relative justify-end w-full p-2 gap-2 shadow-md rounded-md bg-slate-200">
      <div>
        <BackspaceIcon
          className="w-7 hover:scale-105 transition-transform cursor-pointer"
          onClick={() => setShowConfirmation((prevState) => !prevState)}
        />
        <div
          style={{
            display: showConfirmation ? "flex" : "none",
            position: "absolute",
          }}
          onClick={(e) => handleDeleteProduct(e, id, setIsLoading)}
        >
          <LoadingButton text="Delete" isLoading={isLoading} type="button" />
        </div>
      </div>

      <PencilSquareIcon
        className="w-7 hover:scale-105 transition-transform cursor-pointer"
        onClick={() => setIsOnEditMode((prevState) => !prevState)}
      />
    </div>
  );
}

export default CardHeader;
