import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-xl font-normal leading-[168.9%]",
  s: "text-sm font-normal leading-[149.5%]",
  xl: "text-2xl font-normal",
  md: "text-base font-normal leading-[168.9%]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-500 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Text;