import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getMainPageItems } from '../../api/mainPageItems';
import { useIsMobile } from '../../context/useIsMobile';
import { IMainPageItem } from '../../dto/mainPageDto';
import { useAppSelector } from '../../redux/hooks';
import { useAppHistory } from '../../utils/useAppHistory';

export const useHome = () => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    const { state } = useAppHistory();
    const searchText = useAppSelector((state) => state.mainPageFilter.searchText);
    const sidebar = useAppSelector((state) => state.sidebar);
    const sortBy = useAppSelector((state) => state.homeView.sortValue);
    const activeView = useAppSelector((state) => state.homeView.active);
    const currency = useAppSelector((state) => state.currencies.active);
    const [start, setStart] = useState<number | undefined>(undefined);
    const [items, setItems] = useState<IMainPageItem[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    const category = useMemo(() => {
        if (!state) {
            return null;
        }
        const sidebarFilters = state.sidebarFilters;
        if (!sidebarFilters || sidebarFilters.length === 0) {
            return null;
        }

        return sidebarFilters[sidebarFilters.length - 1];
    }, [state]);

    const commonFilters = useMemo(() => {
        if (Object.keys(state?.commonFilters ?? {}).length === 0) {
            return null;
        }
        const {
            listing_type,
            price_from,
            price_to,
            include_items_without_price,
            country,
            place,
            owner_type,
            include_items_with_media,
        } = state.commonFilters;
        const cf: any = {};
        if (!!listing_type && listing_type.length !== 0) {
            cf['listing_type'] = listing_type.join('%7C');
        }
        if (!!price_from) {
            cf['price_from'] = price_from;
        }
        if (!!price_to) {
            cf['price_to'] = price_to;
        }
        if (include_items_without_price !== 1) {
            cf['include_items_without_price'] = include_items_without_price === 0;
        }
        if (!!country && country.length !== 0) {
            cf['country'] = country.join('%7C');
        }
        if (!!place) {
            cf['place'] = place;
        }
        if (owner_type !== undefined) {
            cf['owner_type'] = owner_type === 0 ? 0 : 1;
        }
        if (include_items_with_media) {
            cf['include_items_with_media'] = include_items_with_media;
        }

        return cf;
    }, [state?.commonFilters]);

    const getNextItems = useCallback(async () => {
        try {
            const response = await getMainPageItems({ sortBy, start, currency, category, commonFilters });
            const elems = response.data.items;
            setItems(items.concat(elems));
            setStart(start ?? 0 + 10);
        } catch (err) {
            console.error(err);
        }
    }, [category, commonFilters, currency, items, sortBy, start]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await getMainPageItems({ sortBy, searchText, currency, category, commonFilters });
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
    }, [sortBy, searchText, currency, category, commonFilters]);

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
