//Update input change and update parent component with this change
import { ChangeEvent, Dispatch, SetStateAction } from "react";
export default function handleImageInputChange(
  e: ChangeEvent<HTMLInputElement>,
  textAreas: string[],
  setTextAreas: Dispatch<SetStateAction<string[]>>,
  index: number,
  setDescription: Dispatch<SetStateAction<string[]>>
) {
  const updatedTextAreas = [...textAreas];
  updatedTextAreas[index] = e.target.value;
  setTextAreas(updatedTextAreas);
  setDescription(updatedTextAreas);
}
