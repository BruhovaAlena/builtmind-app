import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled" | "className" | "onClick"
> & {
  title: string;
};

const Button = ({
  onClick,
  title,
  type,
  disabled,

  className,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        `bg-gray-300 min-w-[100px] flex justify-center items-center hover:bg-gray-200  px-2.5 py-1.5 text-sm rounded focus:outline-none focus:shadow-outline ${disabled && "bg-gray-300 cursor-not-allowed opacity-50"} 
     `,
        className,
      )}
    >
      {title}
    </button>
  );
};

export default Button;
