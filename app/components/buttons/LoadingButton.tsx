/**
 * Loading Button Component
 *
 * @param {Props} props - The props object containing the text, isLoading state, and button type.
 *
 * This component represents a loading button that can have two states: "normal mode" and "loading mode".
 * The parent component can change the isLoading state to switch between these two states.
 * The component receives the text to display on the button, the isLoading state to determine the current mode, and the button type (e.g., "button", "submit", or "reset") as props.
 * When in "loading mode", the component displays a spinning arrow icon using the ArrowPathIcon from the "@heroicons/react/24/outline" library.
 * When in "normal mode", the component displays a button with the provided text.
 */
import { ArrowPathIcon } from "@heroicons/react/24/outline";
//This component will have two states  a "normal mode" and a "loading"
//Parent component can change this state
type Props = {
  text: string;
  isLoading: boolean;
  type: "button" | "submit" | "reset";
};

function LoadingButton({ isLoading, type, text }: Props) {
  return (
    <>
      {isLoading ? (
        <ArrowPathIcon
          className="h-10 w-10 animate-spin self-center"
          data-testid="loading-icon"
        />
      ) : (
        <button
          className="z-10 flex-shrink-0 rounded border-4
         border-teal-500 bg-teal-500 px-2 py-1 text-sm 
          text-white hover:border-teal-700 hover:bg-teal-700"
          type={type}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default LoadingButton;
