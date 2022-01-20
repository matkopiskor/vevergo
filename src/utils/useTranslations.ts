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

    const languageCodes = useMemo(() => languageList.map(({ code }) => code), [languageList]);

    useEffect(() => {
        const fetchLanguages = async () => {
            for (let code of languageCodes) {
                const curr = getTranslationsForCode(code);
                if (!curr) {
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
                } else {
                    setLoaded((prev) => prev + 1);
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
