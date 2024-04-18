import React from "react";
interface ButtonTypes {
  onClick?: () => void;
  children: string;
  className: string;
}

const Button: React.FC<ButtonTypes> = ({ onClick, children, className }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
