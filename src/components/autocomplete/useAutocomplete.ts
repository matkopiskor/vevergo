import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAutocompleteData } from '../../api/autocompleteSearch';
import { useAppDispatch } from '../../redux/hooks';
import { clearSearchText, setSearchText } from '../../redux/reducers/mainPageFilter';
import { useAppHistory } from '../../utils/useAppHistory';
import { renderItem, renderTitle } from './Renderers';

export const useAutocomplete = () => {
    const dispatch = useAppDispatch();
    const { state, goTo, path } = useAppHistory();

    const [autocompleteOptions, setAutocompleteOptions] = useState<any[]>([]);
    const { t } = useTranslation();
    const options = useMemo(() => {
        if (autocompleteOptions.length === 0) {
            return [];
        }
        const [items, categories] = autocompleteOptions.reduce<any[]>(
            (acc, option, index) => {
                const { title, entity_type, category } = option;

                const disc = entity_type === 1 ? 'Items' : 'Categories';

                let info = undefined;
                if (disc !== 'Items') {
                    const additionalInfo = category.toString();
                    info = additionalInfo;
                }

                if (disc === 'Items') {
                    acc[0].push(renderItem({ value: title, title, info, index: index.toString() }));
                } else {
                    acc[1].push(renderItem({ value: category.toString(), title, info, index: index.toString() }));
                }
                return acc;
            },
            [[], []],
        );

        return [
            {
                label: renderTitle('Items'),
                options: items,
            },
            {
                label: renderTitle('Categories'),
                options: categories,
            },
        ];
    }, [autocompleteOptions]);

    const onSearch = useCallback(
        async (value: string) => {
            if (value.length === 0) {
                setAutocompleteOptions([]);
                dispatch(clearSearchText());
            } else {
                try {
                    const response = await getAutocompleteData(value);
                    const items = response.data.items;
                    setAutocompleteOptions(items);
                } catch (err) {
                    console.error(err);
                }
            }
        },
        [dispatch],
    );

    const onSelect = useCallback(
        (value: string, option: any) => {
            goTo(path, false, { searchText: value });
            // dispatch(setSearchText(value));
        },
        [goTo, path],
    );

    const onEnterPressed = useCallback(
        (e: any) => {
            if (e.code === 'Enter') {
                goTo(path, false, { searchText: e.target.value });

                // dispatch(setSearchText(e.target.value));
            }
        },
        [goTo, path],
    );

    useEffect(() => {
        dispatch(setSearchText(state?.searchText));
    }, [dispatch, state]);

    return {
        t,
        options,
        onSearch,
        onSelect,
        onEnterPressed,
    };
};
