import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  //const theme = useTheme();

  //#region HANDLERS
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

  //#endregion HANDLERS
  //#endregion BODY
  return (
    <AppBar position="sticky">
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SmallViewContainer>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>

          <StyledImg size="s" />

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {appBarLinks.map((link) => (
              <MenuItem key={link.name}>
                <Typography
                  component="a"
                  href={link.url}
                  sx={{ textAlign: "center" }}
                >
                  {link.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
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
