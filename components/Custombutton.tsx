"use client";

import { CustombuttonProps } from "@/types";
import Image from "next/image";

const Custombutton = ({
  title,
  containerStyles,
  handleClick,
  btntype,
  textStyles,
  rightIcon,
}: CustombuttonProps) => {
  return (
    <button
      disabled={false}
      type={btntype || `button`}
      className={`custom-btn ${containerStyles} ${textStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Custombutton;
