import { PERSISTED_KEYS } from './keys';

const init = {
    list: [],
    active: 44,
};

export const createCurrenciesInitialState = () => {
    const key = PERSISTED_KEYS.CURRENCIES;

    const lsData = localStorage.getItem(key);

    const data = !!lsData ? JSON.parse(lsData) ?? init : init;

    return data;
};

export const saveCurrenciesToLocalStorage = (obj: any) => {
    const key = PERSISTED_KEYS.CURRENCIES;

    localStorage.setItem(key, JSON.stringify(obj));
};
