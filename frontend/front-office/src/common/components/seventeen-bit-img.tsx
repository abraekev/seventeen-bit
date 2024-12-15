import { FC } from "react";
import src from "/images/no-background-png.png";

export const SeventeenBitImg: FC<React.HTMLAttributes<HTMLImageElement>> = (
  props
) => {
  const attributes = { ...props, alt: "SeventeenBitImg", src: src };
  return <img {...attributes}></img>;
};
