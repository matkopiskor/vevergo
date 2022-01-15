import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCategoryAttributes } from '../../api/categoryAttributes';
import { getCategoryMeasurementUnits } from '../../api/categoryMeasurementUnits';
import { Option } from '../../models/Option';
import { useAppSelector } from '../../redux/hooks';
import { useAppHistory } from '../../utils/useAppHistory';

interface IActiveCategories {
    [key: string]: {
        name: string;
        items: {
            attributeId: number;
            name: string;
            childAttributeId?: number;
            parentAttributeId?: number;
            filterMinimum?: number;
            filterMaximum?: number;
            filterStep?: number;
            measurementUnits: any[];
            dataType: number;
            values: Option[];
        }[];
    };
}

export const useCategoryFilters = () => {
    const { state, goTo, path } = useAppHistory();
    const [open, setOpen] = useState<boolean>(false);
    const [activeAttributes, setActiveAttributes] = useState<IActiveCategories>();

    const listingTypes = useAppSelector((state) => state.listingTypes.list);
    const countries = useAppSelector((state) => state.countries.list);

    const activeCategory = useMemo(() => {
        if ((state?.sidebarFilters ?? []).length === 0) {
            return undefined;
        }
        return state.sidebarFilters[state.sidebarFilters.length - 1];
    }, [state?.sidebarFilters]);

    const commonFilters = useMemo(() => state?.commonFilters ?? {}, [state?.commonFilters]);

    useEffect(() => {
        const fetch = async () => {
            const categoryAttributes = await getCategoryAttributes(Number(activeCategory));
            const attributes: any[] = categoryAttributes.data.items;
            const attrs = attributes.reduce<IActiveCategories>((memo, attr, index) => {
                if (attr.name === 'Production year') {
                    console.log(attr);
                }
                const item = {
                    attributeId: attr.attribute_id,
                    name: attr.name,
                    childAttributeId: attr.child_attribute_id,
                    parentAttributeId: attr.parent_attribute_id,
                    filterMinimum: attr.filter_minimum,
                    filterMaximum: attr.filter_maximum,
                    filterStep: attr.filter_step,
                    dataType: attr.data_type,
                    measurementUnits: attr.measurement_units.map((elem: any) => {
                        return {
                            value: elem.measurement_unit_id.toString(),
                            label: elem.name,
                            default: elem.default,
                        };
                    }),
                    values: (attr.attribute_values ?? []).map((elem: any) => ({
                        value: elem.attribute_value_id.toString(),
                        label: elem.name,
                    })),
                };
                if (!memo[attr.group_id.toString()]) {
                    memo[attr.group_id.toString()] = {
                        name: attr.group_name,
                        items: [item],
                    };
                } else {
                    memo[attr.group_id.toString()].items.push(item);
                }
                return memo;
            }, {});
            setActiveAttributes(attrs);
        };
        if (!!activeCategory) {
            fetch();
        } else {
            setActiveAttributes(undefined);
        }
    }, [activeCategory]);

    // RESET
    const reset = useCallback(() => {
        setSelectedListingTypeOptions(commonFilters?.selectedListingTypeOption);
        setPriceFrom(commonFilters?.priceFrom);
        setPriceTo(commonFilters?.priceTo);
        setSelectedCategoryMeasurementUnit(commonFilters?.selectedCategoryMeasurementUnit);
        setAdsWithoutPriceValue(commonFilters?.adsWithoutPriceValue ?? 1);
        setSelectedCountryOption(commonFilters?.selectedCountryOption);
        setAdPlaceValue(commonFilters?.adPlaceValue);
        setPublishedByValue(commonFilters?.publishedByValue ?? 1);
        setAdsWithoutMediaValue(commonFilters?.adsWithoutMediaValue ?? 1);
    }, [
        commonFilters?.adPlaceValue,
        commonFilters?.adsWithoutMediaValue,
        commonFilters?.adsWithoutPriceValue,
        commonFilters?.priceFrom,
        commonFilters?.priceTo,
        commonFilters?.publishedByValue,
        commonFilters?.selectedCategoryMeasurementUnit,
        commonFilters?.selectedCountryOption,
        commonFilters?.selectedListingTypeOption,
    ]);

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
            const units = response.data.items.map(({ id, name }: any) => ({ value: id.toString(), label: name }));
            setCategoryMeasurementUnitOptions(units);
        };
        fetch();
    }, [activeCategory]);

    // LISTING TYPES
    const listingTypesOptions = useMemo<Option[]>(
        () =>
            listingTypes.map(({ id, name }) => ({
                value: id.toString(),
                label: name,
            })),
        [listingTypes]
    );
    const [selectedListingTypeOption, setSelectedListingTypeOptions] = useState<string[] | undefined>();

    // Price Type
    const [priceFrom, setPriceFrom] = useState<number | undefined>();
    const [priceTo, setPriceTo] = useState<number | undefined>();
    const [selectedCategoryMeasurementUnit, setSelectedCategoryMeasurementUnit] = useState<string | undefined>();

    // Includes ads without price
    const [adsWithoutPriceValue, setAdsWithoutPriceValue] = useState<number>(1);

    // Country
    const countryOptions = useMemo<Option[]>(
        () =>
            countries.map(({ id, name }) => ({
                value: id.toString(),
                label: name,
            })),
        [countries]
    );
    const [selectedCountryOption, setSelectedCountryOption] = useState<string[] | undefined>();

    // Ad place
    const [adPlaceValue, setAdPlaceValue] = useState<string | undefined>();

    // Published by
    const [publishedByValue, setPublishedByValue] = useState<number>(1);

    // Includes ads without media
    const [adsWithoutMediaValue, setAdsWithoutMediaValue] = useState<number>(1);

    const applyFilters = useCallback(() => {
        const commonFilters = {
            selectedListingTypeOption,
            priceFrom,
            priceTo,
            adsWithoutPriceValue,
            selectedCountryOption,
            adPlaceValue,
            publishedByValue,
            adsWithoutMediaValue,
        };

        goTo(path, false, { commonFilters });
        setOpen(false);
    }, [
        adPlaceValue,
        adsWithoutMediaValue,
        adsWithoutPriceValue,
        goTo,
        path,
        priceFrom,
        priceTo,
        publishedByValue,
        selectedCountryOption,
        selectedListingTypeOption,
    ]);

    return {
        activeAttributes,
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
        applyFilters,
    };
};