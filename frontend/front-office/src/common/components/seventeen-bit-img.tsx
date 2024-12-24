import { FC } from "react";
import src from "/images/no-background-png.png";

interface SeventeenBitImgProps {
  props?: React.HTMLAttributes<HTMLImageElement>;
  size?: "xs" | "s" | "md" | "lg" | "xl";
}

const sizeMapping: Record<string, string> = {
  xs: "1rem",
  s: "3rem",
  md: "6rem",
  lg: "10rem",
  xl: "15rem",
};

export const SeventeenBitImg: FC<SeventeenBitImgProps> = ({
  props,
  size = "s",
}) => {
  const style = { ...props?.style, height: sizeMapping[size] };

  const attributes = {
    ...props,
    alt: "SeventeenBitImg",
    src: src,
    style,
  };

  return <img {...attributes}></img>;
};
