import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCategoryTree } from '../redux/reducers/categoryTreeReducer';
import { fetchCountries } from '../redux/reducers/countriesReducer';
import { fetchCurrencies } from '../redux/reducers/currenciesReducer';
import { fetchLanguages } from '../redux/reducers/langugagesReducer';

export const useApp = () => {
    const dispatch = useAppDispatch();
    const currencies = useAppSelector((state) => state.currencies.list);
    const languages = useAppSelector((state) => state.languages.list);
    const countries = useAppSelector((state) => state.countries.list);
    const categoryTree = useAppSelector((state) => state.categoryTree.tree);

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

    useEffect(() => {
        if (countries.length === 0) {
            dispatch(fetchCountries());
        }
    }, [countries.length, dispatch]);

    useEffect(() => {
        if (categoryTree.length === 0) {
            dispatch(fetchCategoryTree());
        }
    }, [categoryTree.length, dispatch]);

    const loaded = useMemo(() => {
        return currencies.length !== 0 && languages.length !== 0 && countries.length !== 0 && categoryTree.length !== 0;
    }, [categoryTree.length, countries.length, currencies.length, languages.length]);
    return {
        loaded,
    };
};
