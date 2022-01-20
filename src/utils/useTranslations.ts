import { useEffect, useMemo, useState } from 'react';
import { getTranslations } from '../api/translations';
import { useAppSelector } from '../redux/hooks';
import { addTranslations, changeTranslation, getTranslationsForCode } from '../translations/init';

const KEY = 'vvg-translations';

export const useTranslations = () => {
    const [loaded, setLoaded] = useState<number>(0);
    const [ready, setReady] = useState<boolean>(false);
    const { active: activeLanguage, list: languageList } = useAppSelector((state) => state.languages);
    const activeLanguageCode = useMemo(
        () => languageList.find(({ id }) => id === activeLanguage)?.code,
        [activeLanguage, languageList]
    );

    const saveTranslationsToLocalStorage = (code: string, translations: any) => {
        const currentData = JSON.parse(localStorage.getItem(KEY) ?? '{}');
        currentData[code] = translations;
        localStorage.setItem(KEY, JSON.stringify(currentData));
    };

    const getTranslationsFromLocalStorage = (): any => {
        const currentDataStr = localStorage.getItem(KEY);

        if (!currentDataStr) {
            return undefined;
        }

        try {
            const data = JSON.parse(currentDataStr);
            return data;
        } catch (e) {
            return undefined;
        }
    };

    const languageCodes = useMemo(() => languageList.map(({ code }) => code), [languageList]);

    useEffect(() => {
        const currCached = getTranslationsFromLocalStorage();
        const fetchLanguages = async () => {
            for (let code of languageCodes) {
                const currSaved = getTranslationsForCode(code);
                if (currSaved) {
                    setLoaded((prev) => prev + 1);
                } else {
                    if (!!currCached?.[code]) {
                        addTranslations(code, currCached[code]);
                        setLoaded((prev) => prev + 1);
                    } else {
                        const resources: any = await getTranslations(code);
                        const {
                            data: { items },
                        } = resources;
                        if (items[0]) {
                            const { data } = items[0];
                            const translations = data[code];
                            addTranslations(code, translations);
                            setLoaded((prev) => prev + 1);
                            saveTranslationsToLocalStorage(code, translations);
                        }
                    }
                }
            }
        };
        fetchLanguages();
    }, [languageCodes]);

    useEffect(() => {
        if (!!activeLanguageCode && loaded >= languageList.length) {
            changeTranslation(activeLanguageCode);
            setReady(true);
        }
    }, [activeLanguageCode, languageList.length, loaded]);

    return { ready };
};
