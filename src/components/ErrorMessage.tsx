import React from "react";

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <span className="text-red-500 text-xs h-[20px] italic">{message}</span>
  );
};

export default ErrorMessage;
