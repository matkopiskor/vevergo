import { PERSISTED_KEYS } from './keys';

export const createInitialState = (key: PERSISTED_KEYS, initObj?: any) => {
    const lsData = localStorage.getItem(key);

    const init = initObj ?? {};

    const data = !!lsData ? JSON.parse(lsData) ?? init : init;

    return data;
};

export const saveToLocalStorage = (key: PERSISTED_KEYS, obj: any) => {
    localStorage.setItem(key, JSON.stringify(obj));
};

export const clearLocalStorageByKey = (key: PERSISTED_KEYS) => {
    localStorage.removeItem(key);
};
