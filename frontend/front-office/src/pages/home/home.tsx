import { SeventeenBitImg } from "@/common/components/seventeen-bit-img";
import { useTranslation } from "@/common/configs/translation/use-translation.hook";
import { FC } from "react";

export const Home: FC = () => {
  const { t } = useTranslation("pages.home");

  return (
    <>
      <SeventeenBitImg size="xl" />
      <p>{t("home_page")}</p>
    </>
  );
};
