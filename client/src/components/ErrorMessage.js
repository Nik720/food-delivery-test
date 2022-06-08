
import React from "react";
const classNames = require('classnames');

const ErrorMessage = ({ variant = "info", children }) => {

    const buttonClass = classNames(
        'p-2', 'rounded-[3px]', 'text-sm border my-1',
        { "border-green-500 text-green-500": variant === "success" },
        { "border-red-500 text-red-500": variant === "error" },
        { "border-orange-500 text-orange-500": variant === "info" }
    );
  return (
    <p className={buttonClass}>
      {children}
    </p>
  );
};

export default ErrorMessage;