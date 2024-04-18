
import  NextImage,{ StaticImageData } from "next/image";

export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src:  string | StaticImageData;
    width: number;
    height: number;
    alt: string;
    onClick: () => void;
  }>;

const Img = ({
  className,
  onClick,
  src = "/defaultNoData.png",
  alt = "testImg",
  width = 300,
  height = 300,
  ...restProps
}: ImgProps) => {
  return (
    <NextImage
    className={className}
    src={src}
    alt={alt}
    width={width}
    height={height}
    onClick={onClick}
    {...restProps}
  />
  );
};

export { Img };