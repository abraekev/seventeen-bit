import { FC, ReactNode } from "react";
import { useResponsive } from "../configs/responsive/use-responsive.hook";

interface ResponsiveContainerProps {
  children?: ReactNode;
  showLarge?: boolean;
  className?: string;
}

export const ResponsiveContainer: FC<ResponsiveContainerProps> = ({
  children,
  showLarge,
  className,
}) => {
  const { isLargeScreen } = useResponsive();
  const showComponent = showLarge ? isLargeScreen : !isLargeScreen;

  return showComponent ? <div className={className}>{children}</div> : null;
};

export const SmallView: FC<ResponsiveContainerProps> = ({
  children,
  className,
}) => (
  <ResponsiveContainer showLarge={false} className={className}>
    {children}
  </ResponsiveContainer>
);

export const LargeView: FC<ResponsiveContainerProps> = ({
  children,
  className,
}) => (
  <ResponsiveContainer showLarge={true} className={className}>
    {children}
  </ResponsiveContainer>
);
