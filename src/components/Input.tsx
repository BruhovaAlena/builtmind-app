import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "type"
  | "id"
  | "value"
  | "onChange"
  | "className"
  | "placeholder"
  | "onInvalid"
> & {
  label?: string;
  errorMessage?: string;
};

const Input = (
  {
    label,
    id,
    type,
    onChange,
    value,
    className,
    placeholder,
    onInvalid,
    errorMessage,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div>
      <label
        className="block text-gray-900 text-sm font-medium mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        onInvalid={onInvalid}
        min={0}
        className={clsx(
          "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",
          className,
        )}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default forwardRef(Input);
