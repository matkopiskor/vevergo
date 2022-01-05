import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCategoryTree } from '../redux/reducers/categoryTreeReducer';
import { fetchCountries } from '../redux/reducers/countriesReducer';
import { fetchCurrencies } from '../redux/reducers/currenciesReducer';
import { fetchLanguages } from '../redux/reducers/langugagesReducer';
import { fetchListingTypes } from '../redux/reducers/listingTypesReducer';
import { fetchUser } from '../redux/reducers/userReducer';
import { checkArraysField } from '../utils/checkArraysFilled';

export const useApp = () => {
    const dispatch = useAppDispatch();
    const currencies = useAppSelector((state) => state.currencies.list);
    const languages = useAppSelector((state) => state.languages.list);
    const countries = useAppSelector((state) => state.countries.list);
    const categoryTree = useAppSelector((state) => state.categoryTree.tree);
    const listingTypes = useAppSelector((state) => state.listingTypes.list);
    const { id, token, data } = useAppSelector((state) => state.user);

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

    useEffect(() => {
        if (categoryTree.length === 0) {
            dispatch(fetchCategoryTree());
        }
    }, [categoryTree.length, dispatch]);

    useEffect(() => {
        if (listingTypes.length === 0) {
            dispatch(fetchListingTypes());
        }
    }, [listingTypes.length, dispatch]);

    useEffect(() => {
        if (!!id && !!token && !data) {
            dispatch(fetchUser(id));
        }
    }, [id, token, dispatch, data]);

    const loaded = useMemo(() => {
        const l = checkArraysField(
            currencies.length,
            languages.length,
            countries.length,
            categoryTree.length,
            listingTypes.length,
        );
        return l;
    }, [categoryTree.length, countries.length, currencies.length, languages.length, listingTypes.length]);

    const isLoggedIn = useMemo(() => !!id, [id]);
    return {
        loaded,
        isLoggedIn,
    };
};
