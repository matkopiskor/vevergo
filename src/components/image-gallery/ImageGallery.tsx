import { FC, useMemo } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import './ImageGallery.css';

interface IProps {
    images: any[];
}

const customItemRender = (videoUrl: any, idx: any) => {
    return (
        <div className='video-wrapper'>
            <iframe title={idx} width='560' height='315' src={videoUrl} frameBorder='0' allowFullScreen></iframe>
        </div>
    );
};

export const ImageGallery: FC<IProps> = ({ images }) => {
    const imagesForGallery = useMemo(
        () =>
            images.map(({ imageUrl, thumbnailUrl, videoUrl, media_type, comment }, idx) => {
                const obj: any = {
                    original: imageUrl,
                    thumbnail: thumbnailUrl,
                    description: comment,
                    originalClass: 'image-gallery-original',
                    thumbnailClass: 'image-gallery-thumbnail',
                };
                if (media_type === 1) {
                    return obj;
                }
                obj['renderItem'] = () => customItemRender(videoUrl, idx);
                return obj;
            }),
        [images],
    );
    return (
        <div className='image-gallery-wrapper'>
            <ReactImageGallery
                items={imagesForGallery}
                showPlayButton={false}
                showBullets={true}
                showIndex={true}
                lazyLoad={true}
            />
        </div>
    );
};
