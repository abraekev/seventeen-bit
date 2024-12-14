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
  const check = showLarge ? isLargerthanMd : !isLargerthanMd;

  const customStyle = divAttributes.style;

  return check ? (
    customStyle ? (
      <div {...divAttributes}>{children}</div>
    ) : (
      <StyledDiv {...divAttributes}>{children}</StyledDiv>
    )
  ) : null;
};

export const SmallView: FC<React.HTMLAttributes<HTMLDivElement>> = (
  divAttributes
) => <ResponsiveContainer {...divAttributes} showLarge={false} />;

export const LargeView: FC<React.HTMLAttributes<HTMLDivElement>> = (
  divAttributes
) => <ResponsiveContainer {...divAttributes} showLarge={true} />;
