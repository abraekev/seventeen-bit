import { CSSProperties, FC, ImgHTMLAttributes } from "react";
import src from "/images/no-background-png.png";

interface SeventeenBitImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: "xs" | "s" | "md" | "lg" | "xl" | "xxl";
  style?: CSSProperties;
}

const sizeMapping: Record<string, string> = {
  xs: "1rem",
  s: "3rem",
  md: "6rem",
  lg: "10rem",
  xl: "15rem",
  xxl: "20rem",
};

export const SeventeenBitImg: FC<SeventeenBitImgProps> = ({
  size = "s",
  style,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt="Seventeen Bit"
      style={{ ...style, height: sizeMapping[size] }}
      {...rest}
    ></img>
  );
};
