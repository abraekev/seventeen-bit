import { ReactNode } from "react";
import { AppBarMenu } from "./content/app-bar-menu";

export enum DrawerContentType {
  "default",
  "a",
  "AppBarMenu",
}
export const drawerContentMap: Record<DrawerContentType, ReactNode> = {
  [DrawerContentType.default]: null,
  [DrawerContentType.a]: <>a</>,
  [DrawerContentType.AppBarMenu]: <AppBarMenu />,
};
