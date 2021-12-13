import { useEffect, useState } from 'react';
import { getItemMedia } from '../../api/itemMedia';
import { createImageUrl } from '../../utils/createImageUrl';
import { createImageUrlByMediaType } from '../../utils/createImageUrlByMediaType';

export const useContentImageView = (itemId: string, title: string, defaultImage?: string) => {
    const defaultImgUrl = createImageUrl(defaultImage);
    const [availableImages, setAvailableImages] = useState([
        {
            url: defaultImgUrl,
            alt: title,
            id: defaultImage !== null && defaultImage !== undefined ? defaultImage : 'DEFAULT_IMAGE',
        },
    ]);
    useEffect(() => {
        const getMedia = async () => {
            if (!!defaultImage) {
                const { data } = await getItemMedia(itemId);
                const { error_id } = data;
                if (error_id === 0) {
                    const { items } = data;
                    const images: any[] = [];
                    for (let item of items) {
                        const { id, default: defaultImg, media_type, video_code } = item;
                        if (!defaultImg) {
                            const url = createImageUrlByMediaType(media_type, id, video_code);
                            images.push({ url, alt: title, id });
                        }
                        if (images.length) {
                            setAvailableImages([{ url: defaultImgUrl, alt: title, id: 'DEFAULT_IMAGE' }, ...images]);
                        }
                    }
                }
            }
        };
        getMedia();
    }, [defaultImage, defaultImgUrl, itemId, title]);
    return {
        availableImages,
    };
};
