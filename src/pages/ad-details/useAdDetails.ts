import { useCallback, useEffect, useMemo, useState } from 'react';
import { getItemMedia } from '../../api/itemMedia';
import { getSingleAd } from '../../api/singleAd';
import { useAppSelector } from '../../redux/hooks';

export const useAdDetails = () => {
    const { active: activeCurrency, list: currencyList } = useAppSelector((state) => state.currencies);
    const { active, list } = useAppSelector((state) => state.languages);
    const activeLanguage = useMemo(() => list.find(({ id }) => id === active)?.code, [active, list]);
    const [adId, setAdId] = useState<string | undefined>();
    const [ad, setAd] = useState<any>();

    const activeCurrencyName = currencyList.find(({ id }) => id === activeCurrency)!.name;

    useEffect(() => {
        try {
            const path = window.location.pathname;
            const id = path.split('/')[path.startsWith('/#') ? 3 : 2];
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

            const media = mediaResponse.data.items.reduce((acc: any[], item: any) => {
                const { id, comment, media_type, video_code, image_height, image_width, default: defaultImage } = item;
                const newImage = {
                    comment,
                    media_type,
                    image_height,
                    image_width,
                    imageUrl:
                        media_type === 1
                            ? 'https://api.vevergo.com:4443/item_images/' + id + '.jpeg'
                            : 'https://img.youtube.com/vi/' + video_code + '/maxresdefault.jpg',
                    videoUrl: media_type === 2 ? 'https://www.youtube.com/embed/' + video_code : null,
                    thumbnailUrl:
                        media_type === 1
                            ? 'https://api.vevergo.com:4443/item_adjusted_images/' + id + '.jpeg'
                            : 'https://img.youtube.com/vi/' + video_code + '/maxresdefault.jpg',
                };
                if (defaultImage) {
                    acc.unshift(newImage);
                } else {
                    acc.push(newImage);
                }
                return acc;
            }, []);
            const ad = {
                item,
                media,
            };
            setAd(ad);
        };

        if (adId) {
            fetchAd(adId);
        }
    }, [adId, activeLanguage, activeCurrency]);

    const isFavorite = useMemo(() => false, []);
    const isLoggedIn = useMemo(() => false, []);

    const onFavoriteClick = useCallback(() => {}, []);

    const userId = '1';
    const userLink = useMemo(
        () => (userId === ad?.item?.owner ? '/my-items' : `/profile/${ad?.item?.owner}/items`),
        [ad?.item?.owner]
    );

    const { placeLink, placeText } = useMemo(() => {
        let text = ad?.item?.country_name ?? '';
        let link = 'https://www.google.com/maps/place/';
        if (!!ad?.item?.place) {
            link += ad?.item?.place + ',+ ' + ad?.item?.country_name;
            text += ', ' + ad?.item?.place;
        } else {
            link += ad?.item?.country_name;
        }
        return {
            placeLink: link,
            placeText: text,
        };
    }, [ad?.item?.country_name, ad?.item?.place]);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [reportModalOpen, setReportModalOpen] = useState<boolean>(false);

    return {
        ad,
        isFavorite,
        isLoggedIn,
        onFavoriteClick,
        activeCurrencyName,
        userLink,
        placeLink,
        placeText,
        userId,
        modalOpen,
        setModalOpen,
        reportModalOpen,
        setReportModalOpen,
    };
};
