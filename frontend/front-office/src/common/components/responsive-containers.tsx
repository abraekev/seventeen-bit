import { styled, useMediaQuery } from "@mui/material";
import React from "react";
import { FC, ReactNode } from "react";

const StyledDiv = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ResponsiveContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showLarge?: boolean;
}

const ResponsiveContainer: FC<ResponsiveContainerProps> = ({
  children,
  showLarge,
  ...divAttributes
}) => {
  const isLargerthanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const showComponent = showLarge ? isLargerthanMd : !isLargerthanMd;

  const attributes = {
    ...divAttributes,
    style: {
      width: "100%",
      display: "flex",
      alignitems: "center",
      justifycontent: "space-between",
      ...divAttributes.style,
    },
  };

  return showComponent ? (
    <StyledDiv {...attributes}>{children}</StyledDiv>
  ) : null;
};

export const SmallView: FC<React.HTMLAttributes<HTMLDivElement>> = (
  divAttributes
) => <ResponsiveContainer {...divAttributes} showLarge={false} />;

export const LargeView: FC<React.HTMLAttributes<HTMLDivElement>> = (
  divAttributes
) => <ResponsiveContainer {...divAttributes} showLarge={true} />;
