import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCurrencies } from '../redux/reducers/currenciesReducer';
import { fetchLanguages } from '../redux/reducers/langugagesReducer';

export const useApp = () => {
    const dispatch = useAppDispatch();
    const currencies = useAppSelector((state) => state.currencies.list);
    const languages = useAppSelector((state) => state.languages.list);

    useEffect(() => {
        if (currencies.length === 0) {
            dispatch(fetchCurrencies());
        }
    }, [currencies.length, dispatch]);

    useEffect(() => {
        if (languages.length === 0) {
            dispatch(fetchLanguages());
        }
    }, [languages.length, dispatch]);
    return {};
};
