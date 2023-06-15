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
          className="w-10 h-10 animate-spin self-center"
          data-testid="loading-icon"
        />
      ) : (
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700
         border-teal-500 hover:border-teal-700 text-sm border-4 text-white 
          py-1 px-2 rounded"
          type={type}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default LoadingButton;
