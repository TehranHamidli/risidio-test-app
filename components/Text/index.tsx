'use client'

import React from "react";

interface TextTypes {
  children?: string;
  className?: string;
}

const Text: React.FC<TextTypes> = ({ children, className }) => {
  return (
    <p className={`text-blue_gray-500 font-inter ${className} `}>
      {children}
    </p>
  );
};

export default Text;
