import React from "react";

const sizes = {
  s: "text-[2rem] font-extrabold",
  md: "text-4xl font-semibold leading-[168.9%]",
  xs: "text-2xl font-bold",
  lg: "text-[4rem] font-extrabold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",

  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-inter ${className} `} {...restProps}>
      {children}
    </Component>
  );
};

export default Heading