import { FC, useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { useContentImageView } from './useContentImageView';

interface IContentImageView {
    defaultImage: string;
    title: string;
    itemId: string;
}

export const ContentImageView: FC<IContentImageView> = ({ defaultImage, title, itemId }) => {
    const { availableImages } = useContentImageView(itemId, title, defaultImage);
    return (
        <div className='content-image-view'>
            {availableImages.length === 1 ? (
                <img
                    key={availableImages[0].id}
                    className='content-image-view__image'
                    src={availableImages[0].url}
                    alt={availableImages[0].alt}
                />
            ) : (
                <MultiImageView images={availableImages} />
            )}
        </div>
    );
};

interface IMultiImageViewProps {
    images: { id: string; url: string; alt: string }[];
}

const useMultiImageView = (images: { id: string; url: string; alt: string }[]) => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [className, setClassName] = useState<string>('');

    const onNext = useCallback(() => {
        const nextIdx = currentIdx === images.length - 1 ? 0 : currentIdx + 1;
        setCurrentIdx(nextIdx);
        setClassName('content-image-view__multi-image-from-rigth');
    }, [currentIdx, images.length]);

    const onPrev = useCallback(() => {
        const prevIdx = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
        setCurrentIdx(prevIdx);
        setClassName('content-image-view__multi-image-from-left');
    }, [currentIdx, images.length]);
    return {
        className,
        currentIdx,
        onNext,
        onPrev,
    };
};

const MultiImageView: FC<IMultiImageViewProps> = ({ images }) => {
    const { className, currentIdx, onNext, onPrev } = useMultiImageView(images);
    return (
        <div className='content-image-view__multi'>
            <img
                key={images[currentIdx].id}
                className={`content-image-view__multi-image ${className}`}
                src={images[currentIdx].url}
                alt={images[currentIdx].alt}
            />
            <ArrowLeft
                className='content-image-view__multi-arrow-left'
                onClick={(e: any) => {
                    e.preventDefault();
                    onPrev();
                }}
                size={28}
            />
            <ArrowRight
                className='content-image-view__multi-arrow-right'
                onClick={(e: any) => {
                    e.preventDefault();
                    onNext();
                }}
                size={28}
            />
        </div>
    );
};
