import { useCallback, useEffect, useState } from 'react';
import { getMainPageItems } from '../../api/mainPageItems';
import { IMainPageItem } from '../../dto/mainPageDto';
import { useAppSelector } from '../../redux/hooks';
import { trans } from '../../utils/mocks';

export const useHome = () => {
    const t = trans;
    const searchText = useAppSelector((state) => state.mainPageFilter.searchText);
    const [start, setStart] = useState<number | undefined>(undefined);
    const [items, setItems] = useState<IMainPageItem[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    const getNextItems = useCallback(async () => {
        console.log('aaaa');
        try {
            const response = await getMainPageItems(start);
            const elems = response.data.items;
            setItems(items.concat(elems));
            setStart(start ?? 0 + 10);
        } catch (err) {
            console.error(err);
        }
    }, [items, start]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await getMainPageItems();
                const elems = response.data.items;
                const total = response.data.total_count;
                setItems(elems);
                setTotalCount(total);
                setStart(undefined);
            } catch (err) {
                console.error(err);
            }
        };
        getItems();
    }, [searchText]);
    return {
        items,
        totalCount,
        t,
        getNextItems,
        start,
    };
};
