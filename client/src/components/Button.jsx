import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  kind,
  href,
  type = "text",
  onClick,
  disabled,
}) => {
  let defaultClassName = "outline-none rounded-lg px-6 py-3";
  switch (kind) {
    case "primary":
      defaultClassName += " text-white bg-primary";
      break;
    case "secondary":
      defaultClassName += " text-white bg-secondary";
      break;
    case "ghost":
      defaultClassName += " text-secondary bg-[#EEEAFD]";
      break;
    default:
      break;
  }
  if (href)
    return (
      <Link to={href} className={`${defaultClassName} ${className}`}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      type={type}
      className={` ${defaultClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
