import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function handleTextAreaChange(
  e: ChangeEvent<HTMLTextAreaElement>,
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
