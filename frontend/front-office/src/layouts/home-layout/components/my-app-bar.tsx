import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  LargeView,
  SmallView,
} from "../../../common/components/responsive-containers";
import { FC } from "react";
import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";
import { styled } from "@mui/material";
import {
  appBarLinks,
  AppBarLinkType,
} from "@/common/configs/constants/app-bar-links";
import { DiscordSvg } from "@/common/components/svg/discord.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { WowSvg } from "@/common/components/svg/wow.svg";
import { useDispatch } from "react-redux";
import { openDrawer } from "@/common/configs/redux/slices/drawer-slice";
import { DrawerContentType } from "@/drawers/drawer-content-map";

//#region styled-components
const StyledImg = styled(SeventeenBitImg)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LargeViewContainer = styled(LargeView)`
  display: flex;
  align-items: center;
  justify-content: space-between; /* ✅ Distributes children */
  width: 50%;
  flex-direction: row; /* ✅ Ensures children are in a row */
`;

const SmallViewContainer = styled(SmallView)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
//#endregion styled-components

export const MyAppBar: FC = () => {
  //#region BODY
  const dispatch = useDispatch();
  //const theme = useTheme();

  //#region HANDLERS

  const getIconRender = (link: AppBarLinkType) => {
    switch (link.name) {
      case "Discord":
        return <DiscordSvg />;
      case "YouTube":
        return <YouTubeIcon />;
      case "WoWProgress":
        return <WowSvg />;
      default:
        return null;
    }
  };

  const handleNewMenu = () => {
    dispatch(openDrawer(DrawerContentType.AppBarMenu));
  };
  //#endregion HANDLERS
  //#endregion BODY
  return (
    <AppBar position="sticky" style={{ backgroundImage: "none" }}>
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SmallViewContainer>
          <IconButton size="large" onClick={handleNewMenu}>
            <MenuIcon />
          </IconButton>

          <StyledImg size="s" />
        </SmallViewContainer>

        <LargeViewContainer>
          <a href="/">
            <SeventeenBitImg
              size="s"
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            />
          </a>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              flexGrow: 1,
            }}
          >
            {appBarLinks.map((link) => (
              <IconButton key={link.name} href={link.url}>
                {getIconRender(link)}
              </IconButton>
            ))}
          </Box>
        </LargeViewContainer>
      </Toolbar>
    </AppBar>
  );
};
