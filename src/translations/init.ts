import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const NS = 'translation';

i18n.use(initReactI18next).init({
    resources: {},
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});
const addTranslations = (locale: string, resources: any) => {
    i18n.addResources(locale, NS, resources);
};

const getTranslationsForCode = (locale: string) => {
    return i18n.getResourceBundle(locale, NS);
};

const changeTranslation = (locale: string) => i18n.changeLanguage(locale);

export { addTranslations, changeTranslation, getTranslationsForCode };
