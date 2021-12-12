import { useEffect, useState } from 'react';
import { getMainPageItems } from '../../api/mainPageItems';
import { IMainPageItem } from '../../dto/mainPageDto';
import { useAppSelector } from '../../redux/hooks';
import { trans } from '../../utils/mocks';

export const useHome = () => {
    const t = trans;
    const searchText = useAppSelector((state) => state.mainPageFilter.searchText);
    const [items, setItems] = useState<IMainPageItem[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        console.log('searchText', searchText);
        const getItems = async () => {
            try {
                const response = await getMainPageItems();
                console.log(response);
                const elems = response.data.items;
                const total = response.data.total_count;
                setItems(elems);
                setTotalCount(total);
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
    };
};
