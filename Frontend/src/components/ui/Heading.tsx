import React from "react";

const sizes = {
  textxs: "text-[16px] font-medium lg:text-[13px]",
  texts: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  headingxs: "text-[18px] font-semibold lg:text-[15px]",
  headings: "text-[19px] font-bold lg:text-[16px]",
  headingmd:
    "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headinglg:
    "text-[46px] font-semibold lg:text-[39px] md:text-[42px] sm:text-[36px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`text-white-0 font-rajdhani ${sizes[size]} ${className} as keyof typeof sizes`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
