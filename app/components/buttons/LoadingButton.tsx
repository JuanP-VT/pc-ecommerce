import React, { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { text } from "stream/consumers";
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
