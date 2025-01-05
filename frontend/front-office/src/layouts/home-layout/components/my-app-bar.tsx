import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  LargeView,
  SmallView,
} from "../../../common/components/responsive-containers";
import { FC } from "react";
import { SeventeenBitSvg } from "../../../common/components/seventeen-bit-svg";
import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";
import { styled } from "@mui/material";

const pages = ["Discord", "Youtube", "WoWprogress"];

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

  //#region HANDLERS
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            color="inherit"
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </SmallViewContainer>

        <LargeViewContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SeventeenBitSvg fontSize="large" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Seventeen bit
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </LargeViewContainer>
      </Toolbar>
    </AppBar>
  );
};
