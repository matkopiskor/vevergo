import { useEffect, useMemo, useState } from 'react';
import { getItemMedia } from '../../api/itemMedia';
import { getSingleAd } from '../../api/singleAd';
import { useAppSelector } from '../../redux/hooks';

export const useAdDetails = () => {
    const activeCurrency = useAppSelector((state) => state.currencies.active);
    const { active, list } = useAppSelector((state) => state.languages);
    const activeLanguage = useMemo(() => list.find(({ id }) => id === active)?.code, [active, list]);
    const [adId, setAdId] = useState<string | undefined>();
    const [ad, setAd] = useState<any>();

    useEffect(() => {
        try {
            const path = window.location.pathname;
            const id = path.split('/')[2];
            setAdId(id);
        } catch {
            console.log('error');
        }
    }, []);

    useEffect(() => {
        const fetchAd = async (id: string) => {
            const headers: any = {
                iss_authentication_token: null,
            };
            if (activeLanguage) {
                headers['accept-language'] = activeLanguage;
            }
            const response = await getSingleAd(id, { currency: activeCurrency }, headers);
            if (response?.data?.error_id !== 0) {
                // TODO
                window.location.href = '/';
            }
            const item = response.data.items[0];

            const mediaResponse = await getItemMedia(id);

            const media = mediaResponse.data.items;
            const ad = {
                item,
                media,
            };
            console.log(ad);
            setAd(ad);
        };

        if (adId) {
            fetchAd(adId);
        }
    }, [adId, activeLanguage, activeCurrency]);

    return { ad };
};
