import { appBarLinks } from "@/common/configs/constants/app-bar-links";
import { Button, styled } from "@mui/material";
import { FC } from "react";

const AppBarMenuContainer = styled("div")`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
`;

export const AppBarMenu: FC = () => {
  return (
    <AppBarMenuContainer>
      {appBarLinks.map((link) => (
        <Button key={link.name} href={link.url} variant="contained">
          {link.name}
        </Button>
      ))}
    </AppBarMenuContainer>
  );
};
