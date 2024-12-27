import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";
import { useTranslation } from "@/common/configs/translation/use-translation.hook";
import { Button, styled } from "@mui/material";
import { FC } from "react";
import { MyCaroussel } from "./components/my-caroussel";

const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
      <MyCaroussel />
    </HomeContainer>
  );
};
