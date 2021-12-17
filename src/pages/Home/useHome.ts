import { useCallback, useEffect, useMemo, useState } from 'react';
import { getMainPageItems } from '../../api/mainPageItems';
import { useIsMobile } from '../../context/useIsMobile';
import { IMainPageItem } from '../../dto/mainPageDto';
import { useAppSelector } from '../../redux/hooks';
import { trans } from '../../utils/mocks';

export const useHome = () => {
    const t = trans;
    const isMobile = useIsMobile();
    const searchText = useAppSelector((state) => state.mainPageFilter.searchText);
    const sidebar = useAppSelector((state) => state.sidebar);
    const sortBy = useAppSelector((state) => state.homeView.sortValue);
    const activeView = useAppSelector((state) => state.homeView.active);
    const currency = useAppSelector((state) => state.currencies.active);
    const [start, setStart] = useState<number | undefined>(undefined);
    const [items, setItems] = useState<IMainPageItem[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    const getNextItems = useCallback(async () => {
        try {
            const response = await getMainPageItems({ start, currency });
            const elems = response.data.items;
            setItems(items.concat(elems));
            setStart(start ?? 0 + 10);
        } catch (err) {
            console.error(err);
        }
    }, [currency, items, start]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await getMainPageItems({ sortBy, searchText, currency });
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy, searchText, currency]);

    const homeClassName = useMemo(() => {
        if (isMobile) {
            return 'home__content';
        }
        if (sidebar?.docked || sidebar?.open) {
            return 'home__content home__content-docked';
        }
        return 'home__content home__content-undocked';
    }, [isMobile, sidebar?.docked, sidebar?.open]);

    return {
        homeClassName,
        items,
        totalCount,
        t,
        getNextItems,
        start,
        activeView,
        isMobile,
    };
};
