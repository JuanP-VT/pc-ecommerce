/**
 * The CardHeader component represents the header section of an admin product card.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the product associated with the card header.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsOnEditMode - A state setter function to toggle edit mode in the parent component.
 * @returns {JSX.Element} The JSX element representing the CardHeader component.
 */
import { BackspaceIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import handleDeleteProduct from "./admin product card/handleDeleteProduct";
import { useRouter } from "next/navigation";
type Props = {
  id: string;
  setIsOnEditMode: Dispatch<SetStateAction<boolean>>;
};

function CardHeader({ id, setIsOnEditMode }: Props) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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
          onClick={(e) => handleDeleteProduct(e, id, setIsLoading, router)}
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
