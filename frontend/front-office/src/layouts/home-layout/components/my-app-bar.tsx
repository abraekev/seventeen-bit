import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  LargeView,
  SmallView,
} from "../../../common/components/responsive-containers";
import { FC } from "react";
import { SeventeenBitSvg } from "../../../common/components/seventeen-bit-svg";
import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";

//#region CONSTANTS
const pages = ["Discord", "Youtube", "WoWprogress"];
//#endregion CONSTANTS

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmallView>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
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
            </Box>

            <SeventeenBitImg size="s" />
          </SmallView>

          <LargeView>
            <SeventeenBitSvg
              sx={{ display: { md: "flex" }, mr: 1 }}
              fontSize="large"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Seventeen bit
            </Typography>
            <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
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
          </LargeView>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
