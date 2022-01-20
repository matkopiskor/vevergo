import { useCallback, useEffect, useState } from 'react';
import { getItemListings } from '../../api/itemListings';
import { useAppSelector } from '../../redux/hooks';

export const useMyItems = () => {
    const token = useAppSelector((state) => state.user.token);
    const currency = useAppSelector((state) => state.currencies.active);

    const [publishedItems, setPublishedItems] = useState<any[]>([]);
    const [unpublishedItems, setUnpublishedItems] = useState<any[]>([]);

    const fetchData = useCallback(async (_currency: number, _token: string) => {
        const response = await getItemListings(_currency, _token);
        const items = response?.data?.items ?? [];
        const [published, unpublished] = items.reduce<[any[], any[]]>(
            (acc, item) => {
                if (item.active) {
                    acc[0].push(item);
                } else {
                    acc[1].push(item);
                }
                return acc;
            },
            [[], []]
        );
        setPublishedItems(published);
        setUnpublishedItems(unpublished);
    }, []);

    useEffect(() => {
        currency && token && fetchData(currency, token);
    }, [currency, fetchData, token]);

    return {
        publishedItems,
        unpublishedItems,
    };
};
