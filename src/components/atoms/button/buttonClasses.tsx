import React from "react";
import { ButtonProps } from "../../../types/interface.button";

export const ButtonClasses = ({
  text,
  onClick,
  classes,
  disabled,
  type,
}: ButtonProps) => {
  return (
    <button
      className={`border py-2 px-2 rounded-lg text-white font-semibold 
      ${type == "success" ? "bg-green-500" : "bg-yellow-300"}  
      ${type == "success" ? "border-green-500" : "border-yellow-200"}  
      ${type == "success" ? "hover:bg-green-700 " : "hover:bg-yellow-400 "}
      ${classes}`
    }
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
