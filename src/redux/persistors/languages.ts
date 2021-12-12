import { PERSISTED_KEYS } from './keys';

const init = {
    list: [],
    active: 1,
};

export const createLanguagesIinitalState = () => {
    const key = PERSISTED_KEYS.LANGUAGES;

    const lsData = localStorage.getItem(key);

    const data = !!lsData ? JSON.parse(lsData) ?? init : init;

    return data;
};

export const saveLanguagesToLocalStorage = (obj: any) => {
    const key = PERSISTED_KEYS.LANGUAGES;

    localStorage.setItem(key, JSON.stringify(obj));
};
