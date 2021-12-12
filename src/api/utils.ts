import { getActiveLanguage } from '../utils/activeLanguage';

const getAcceptLanguageHeaders = () => {
    return {
        'Accept-Language': getActiveLanguage(),
    }
};

export { getAcceptLanguageHeaders };