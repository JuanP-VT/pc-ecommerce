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
    <div className="relative flex w-full justify-end gap-2 rounded-md bg-slate-200 p-2 shadow-md">
      <div>
        <BackspaceIcon
          className="w-7 cursor-pointer transition-transform hover:scale-105"
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
        className="w-7 cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsOnEditMode((prevState) => !prevState)}
      />
    </div>
  );
}

export default CardHeader;
