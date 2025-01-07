import React from "react";

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src: string;
    alt: string;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  src = "defaultNoData.png",
  alt = "testImg",
  className,
  ...restProps
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
