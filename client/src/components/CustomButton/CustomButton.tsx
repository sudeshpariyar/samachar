import React from "react";
import "./CustomButton.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const CustomButton = ({
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button disabled={disabled} className={className} {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
