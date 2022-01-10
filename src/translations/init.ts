import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {},
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});
const addTranslations = (locale: string, resources: any) => {
    i18n.addResources(locale, 'translation', resources);
};

const changeTranslation = (locale: string) => i18n.changeLanguage(locale);

export { addTranslations, changeTranslation };
