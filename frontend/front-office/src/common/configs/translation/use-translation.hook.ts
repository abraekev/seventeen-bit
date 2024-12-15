import { useTranslation as useI18Translation } from "react-i18next";

export const useTranslation = (keyPrefix: string = "") => {
  const namespace = "translation";
  const { t, i18n } = useI18Translation(namespace, { keyPrefix });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageOptions = i18n.languages;
  const language = i18n.language;

  return {
    t: (key: string, options?: { [key: string]: string }) =>
      t(key, { replace: options }),
    changeLanguage,
    languageOptions,
    language,
  };
};
