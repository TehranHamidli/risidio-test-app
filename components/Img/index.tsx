
import  NextImage,{ StaticImageData } from "next/image";

interface ImageTypes 
 {
    className: string;
    src:  string | StaticImageData;
    width?: number;
    height?: number;
    alt?: string;
    onClick?: () => void;
  }

const Img = ({
  className,
  onClick,
  src = "/defaultImg.png",
  alt = "Img",
  width = 300,
  height = 300,
  ...restProps
}: ImageTypes) => {
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