import { useCallback, useMemo, useState } from 'react';
import { getAutocompleteData } from '../../api/autocompleteSearch';
import { useAppDispatch } from '../../redux/hooks';
import { clearSearchText, setSearchText } from '../../redux/reducers/mainPageFilter';
import { trans } from '../../utils/mocks';
import { renderItem, renderTitle } from './Renderers';

export const useAutocomplete = () => {
    const dispatch = useAppDispatch();

    const [autocompleteOptions, setAutocompleteOptions] = useState<any[]>([]);
    const t = trans;

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
            [[], []]
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
        [dispatch]
    );

    const onSelect = useCallback(
        (value: string, option: any) => {
            dispatch(setSearchText(value));
        },
        [dispatch]
    );

    const onEnterPressed = useCallback(
        (e: any) => {
            if (e.code === 'Enter') {
                dispatch(setSearchText(e.target.value));
            }
        },
        [dispatch]
    );

    return {
        t,
        options,
        onSearch,
        onSelect,
        onEnterPressed,
    };
};
