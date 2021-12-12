import { useEffect, useState } from 'react';
import { getMainPageItems } from '../../api/mainPageItems';
import { IMainPageItem } from '../../dto/mainPageDto';
import { useAppSelector } from '../../redux/hooks';

export const useHome = () => {
    const searchText = useAppSelector((state) => state.mainPageFilter.searchText);
    const [items, setItems] = useState<IMainPageItem[]>([]);

    useEffect(() => {
        console.log('searchText', searchText);
        const getItems = async () => {
            try {
                const response = await getMainPageItems();
                console.log(response);
                const elems = response.data.items;
                setItems(elems);
            } catch (err) {
                console.error(err);
            }
        };
        getItems();
    }, [searchText]);
    return {
        items,
    };
};
