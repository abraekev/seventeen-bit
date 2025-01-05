import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";
import { styled, Typography } from "@mui/material";
import { FC } from "react";
import { Caroussel } from "./components/caroussel";
import aberrus from "/images/aotc-aberrus.png";
import voti from "/images/aotc-voti.png";
import bbqOne from "/images/bbq1.png";
import bbqTwo from "/images/bbq2.jpg";
import { ResponsiveContainer } from "@/common/components/responsive-containers";

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

const ResponsiveViewContainer = styled(ResponsiveContainer)<{
  showLarge: boolean;
}>`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: ${(props) => (props.showLarge ? "50%" : "90%")};
  background-color: ${({ theme }) => theme.palette.background.default};
  box-sizing: border-box;
`;
//#endregion

export const Home: FC = () => {
  return (
    <HomeContainer>
      {[true, false].map((isLargeView, index) => (
        <ResponsiveViewContainer key={index} showLarge={isLargeView}>
          <Typography variant="h3">Who are we?</Typography>
          <Typography variant="body1">
            Seventeen Bit is a Dutch speaking AOTC guild that focuses on raiding
            and M+ push.
          </Typography>
          <SeventeenBitImg size="xl" />
          <Caroussel images={images} />

          <p> some text about the guild?</p>
          <p> some text about the guild?</p>
          <p> some text about the guild?</p>
          <p> some text about the guild?</p>
          <p> some text about the guild?</p>
          <p> some text about the guild?</p>
          <p> some text about the guild?</p>
        </ResponsiveViewContainer>
      ))}
    </HomeContainer>
  );
};
