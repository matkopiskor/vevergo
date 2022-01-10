import { useEffect, useMemo, useState } from 'react';
import { getTranslations } from '../api/translations';
import { useAppSelector } from '../redux/hooks';
import { addTranslations, changeTranslation } from '../translations/init';

export const useTranslations = () => {
    const [loaded, setLoaded] = useState<number>(0);
    const [ready, setReady] = useState<boolean>(false);
    const { active: activeLanguage, list: languageList } = useAppSelector((state) => state.languages);
    const activeLanguageCode = useMemo(
        () => languageList.find(({ id }) => id === activeLanguage)?.code,
        [activeLanguage, languageList],
    );

    const languageCodes = useMemo(() => languageList.map(({ code }) => code), [languageList]);

    useEffect(() => {
        const fetchLanguages = async () => {
            for (let code of languageCodes) {
                const resources: any = await getTranslations(code);
                const {
                    data: { items },
                } = resources;
                if (items[0]) {
                    const { data } = items[0];
                    const translations = data[code];
                    addTranslations(code, translations);
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
