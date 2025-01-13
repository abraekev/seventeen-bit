import { Box, styled, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Caroussel } from "./components/caroussel";
import aberrus from "/images/aotc-aberrus.png";
import voti from "/images/aotc-voti.png";
import bbqOne from "/images/bbq1.png";
import bbqTwo from "/images/bbq2.jpg";
import { ResponsiveContainer } from "@/common/components/responsive-containers";
import { GlobalDrawer } from "@/drawers/global-drawer";

const images = [
  { url: aberrus, alt: "Image one" },
  { url: voti, alt: "Image two" },
  { url: bbqOne, alt: "Image three" },
  { url: bbqTwo, alt: "Image four" },
];

//#region styled-components
const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResponsiveViewContainer = styled(ResponsiveContainer)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-sizing: border-box;
`;
//#endregion

export const Home: FC = () => {
  const theme = useTheme();

  return (
    <HomeContainer>
      {[true, false].map((isLargeView, index) => (
        <ResponsiveViewContainer key={index} showLarge={isLargeView}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "2rem",
              color: theme.palette.primary.main,
            }}
          >
            Welkom bij Seventeen Bit
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2rem", textAlign: "justify" }}
          >
            Jouw Thuis voor AOTC Raiding en Mythic+!
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2rem", textAlign: "justify" }}
          >
            Wij zijn een Nederlandstalige World of Warcraft-gilde met een passie
            voor AOTC-raiding en Mythic+. Of je nu een doorgewinterde speler
            bent of net begint met endgame content, wij bieden een gezellige en
            prestatiegerichte omgeving om samen uitdagingen aan te gaan!
          </Typography>

          <Typography
            variant="h4"
            sx={{
              marginBottom: "2rem",
              color: theme.palette.primary.main,
            }}
          >
            De Apsjaars van Ragnaros{" "}
          </Typography>
          <Box sx={{ marginBottom: "2rem" }}>
            <Caroussel images={images} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              marginBottom: "2rem",
              color: theme.palette.primary.main,
            }}
          >
            Recent Progress
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2rem", textAlign: "justify" }}
          >
            Queen Ansurek - 3 oktober 2024
          </Typography>

          <Typography
            variant="h4"
            sx={{
              marginBottom: "2rem",
              color: theme.palette.primary.main,
            }}
          >
            Join us!
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2rem", textAlign: "justify" }}
          >
            Wil je deel uitmaken van een actieve en gezellige Nederlandstalige
            WoW-guild? Kom met ons raiden, push Mythic+ keys of geniet van de
            game met een leuke community. Iedereen is welkom!
          </Typography>
          <GlobalDrawer />
        </ResponsiveViewContainer>
      ))}
    </HomeContainer>
  );
};
