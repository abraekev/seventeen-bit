import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";
import { useTranslation } from "@/common/configs/translation/use-translation.hook";
import { Button, styled } from "@mui/material";
import { FC } from "react";
import { Caroussel } from "./components/caroussel";

import aberrus from "/images/aotc-aberrus.png";
import voti from "/images/aotc-voti.png";
import bbqOne from "/images/bbq1.png";
import bbqTwo from "/images/bbq2.jpg";

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
//#endregion

export const Home: FC = () => {
  const { t } = useTranslation("pages.home");

  return (
    <HomeContainer>
      <Button variant="contained">Hello</Button>
      <Button variant="outlined">Hello</Button>
      <p>{t("home_page")}</p>
      <p>{">> image carousel here <<"}</p>
      the carousel needs a new package (eg. react-slick) to be installed
      <p> some text about the guild?</p>
      <SeventeenBitImg size="xl" />
      <Caroussel images={images} width="80%" />
    </HomeContainer>
  );
};
