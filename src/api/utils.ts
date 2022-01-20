import { getActiveLanguage } from '../utils/activeLanguage';

const getAcceptLanguageHeaders = (token?: string) => {
    const headers: any = {};

    if (token) {
        headers['iss_authentication_token'] = token;
    }

    headers['Accept-Language'] = getActiveLanguage();
    return headers;
};

export { getAcceptLanguageHeaders };
