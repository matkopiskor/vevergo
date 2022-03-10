import { useEffect, useMemo, useState } from 'react';
import { getCategoryAttributes } from '../../api/categoryAttributes';
import { getCategoryMeasurementUnits } from '../../api/categoryMeasurementUnits';
import { Option } from '../../models/Option';
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

    const activeCategory = useMemo(() => {
        if ((state?.sidebarFilters ?? []).length === 0) {
            return undefined;
        }
        return state.sidebarFilters[state.sidebarFilters.length - 1];
    }, [state?.sidebarFilters]);

    const commonFilters = useMemo(() => {
        let filters: any = { include_items_without_price: 1, owner_type: 1, include_items_with_media: 1 };
        if (state?.commonFilters) {
            filters = { ...filters, ...state.commonFilters };
        }
        return filters;
    }, [state?.commonFilters]);

    // useEffect(() => {
    //     form.resetFields();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [commonFilters]);

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

    // // RESET
    // const reset = useCallback(() => {
    //     form.resetFields();
    // }, [form]);

    // useEffect(() => {
    //     if (!open) {
    //         reset();
    //     }
    // }, [open, reset]);

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

    const parseCommonFilters = (values: any) => {
        console.log(values);
        const commonFilters: any = {};
        if (values?.listing_type && values?.listing_type?.length !== 0) {
            commonFilters.listing_type = values?.listing_type;
        }
        if (values?.price_from) {
            commonFilters.price_from = values?.price_from;
        }
        if (values?.price_to) {
            commonFilters.price_to = values?.price_to;
        }
        if (values.include_items_without_price !== 1) {
            commonFilters.include_items_without_price = values?.include_items_without_price;
        }
        if (values?.country && values?.country?.length !== 0) {
            commonFilters.country = values?.country;
        }
        if (values?.place) {
            commonFilters.place = values?.place;
        }
        if (values?.owner_type === 0) {
            commonFilters.owner_type = 0;
        }
        if (values?.owner_type === 2) {
            commonFilters.owner_type = 2;
        }
        if (values?.include_items_with_media === 0) {
            commonFilters.include_items_with_media = false;
        }
        if (values?.include_items_with_media === 1) {
            commonFilters.include_items_with_media = true;
        }
        return commonFilters;
    };

    const applyFilters = (values: any) => {
        const commonFiltersData = parseCommonFilters(values);
        console.log(commonFiltersData);
        goTo(path, false, { commonFilters: commonFiltersData });
        setOpen(false);
    };

    return {
        activeAttributes,
        open,
        setOpen,
        applyFilters,
        commonFilters,
        categoryMeasurementUnitOptions,
    };
};
