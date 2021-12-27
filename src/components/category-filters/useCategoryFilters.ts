import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCategoryMeasurementUnits } from '../../api/categoryMeasurementUnits';
import { Option } from '../../models/Option';
import { useAppSelector } from '../../redux/hooks';
import { useAppHistory } from '../../utils/useAppHistory';

export const useCategoryFilters = () => {
    const { state, goTo, path } = useAppHistory();
    const [open, setOpen] = useState<boolean>(false);

    const listingTypes = useAppSelector((state) => state.listingTypes.list);
    const countries = useAppSelector((state) => state.countries.list);

    const activeCategory = useMemo(() => {
        if ((state?.sidebarFilters ?? []).length === 0) {
            return undefined;
        }
        return state.sidebarFilters[state.sidebarFilters.length - 1];
    }, [state?.sidebarFilters]);

    // RESET
    const reset = useCallback(() => {
        setSelectedListingTypeOptions(undefined);
        setPriceFrom(undefined);
        setPriceTo(undefined);
        setSelectedCategoryMeasurementUnit(undefined);
        setAdsWithoutPriceValue(1);
        setSelectedCountryOption(undefined);
        setAdPlaceValue(undefined);
        setPublishedByValue(1);
        setAdsWithoutMediaValue(1);
    }, []);

    useEffect(() => {
        if (!open) {
            reset();
        }
    }, [open, reset]);

    // category measurement units
    const [categoryMeasurementUnitOptions, setCategoryMeasurementUnitOptions] = useState<Option[] | undefined>();
    useEffect(() => {
        if (!activeCategory) {
            setCategoryMeasurementUnitOptions(undefined);
            return;
        }
        const fetch = async () => {
            const response: any = await getCategoryMeasurementUnits(activeCategory);
            const units = response.data.items.map(({ id, name }: any) => ({ value: id, label: name }));
            setCategoryMeasurementUnitOptions(units);
        };
        fetch();
    }, [activeCategory]);

    // LISTING TYPES
    const listingTypesOptions = useMemo<Option[]>(
        () =>
            listingTypes.map(({ id, name }) => ({
                value: id,
                label: name,
            })),
        [listingTypes],
    );
    const [selectedListingTypeOption, setSelectedListingTypeOptions] = useState<number | undefined>(undefined);

    // Price Type
    const [priceFrom, setPriceFrom] = useState<number | undefined>(undefined);
    const [priceTo, setPriceTo] = useState<number | undefined>(undefined);
    const [selectedCategoryMeasurementUnit, setSelectedCategoryMeasurementUnit] = useState<number | undefined>();

    // Includes ads without price
    const [adsWithoutPriceValue, setAdsWithoutPriceValue] = useState<number>(1);

    // Country
    const countryOptions = useMemo<Option[]>(
        () =>
            countries.map(({ id, name }) => ({
                value: id,
                label: name,
            })),
        [countries],
    );
    const [selectedCountryOption, setSelectedCountryOption] = useState<number | undefined>();

    // Ad place
    const [adPlaceValue, setAdPlaceValue] = useState<string | undefined>();

    // Published by
    const [publishedByValue, setPublishedByValue] = useState<number>(1);

    // Includes ads without media
    const [adsWithoutMediaValue, setAdsWithoutMediaValue] = useState<number>(1);

    const applyFilters = useCallback(() => {
        const commonFilters: any = {};
        if (selectedListingTypeOption) {
            commonFilters['listing_type'] = selectedListingTypeOption;
        }
    }, []);

    return {
        open,
        setOpen,
        listingTypesOptions,
        selectedListingTypeOption,
        setSelectedListingTypeOptions,
        priceFrom,
        setPriceFrom,
        priceTo,
        setPriceTo,
        adsWithoutPriceValue,
        setAdsWithoutPriceValue,
        countryOptions,
        selectedCountryOption,
        setSelectedCountryOption,
        adPlaceValue,
        setAdPlaceValue,
        publishedByValue,
        setPublishedByValue,
        adsWithoutMediaValue,
        setAdsWithoutMediaValue,
        categoryMeasurementUnitOptions,
        selectedCategoryMeasurementUnit,
        setSelectedCategoryMeasurementUnit,
    };
};
