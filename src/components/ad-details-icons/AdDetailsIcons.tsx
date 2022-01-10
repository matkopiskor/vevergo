import { FC, useCallback, useMemo } from 'react';
import { Facebook, Mail, Printer, Star } from 'react-feather';
import { useTranslation } from 'react-i18next';
import './AdDetailsIcons.css';

interface IProps {
    isFavorite: boolean;
    isLoggedIn: boolean;
    className: string;
    onFavoriteClick: () => void;
    userEmail: string;
}

export const AdDetailsIcons: FC<IProps> = ({ isFavorite, isLoggedIn, className, onFavoriteClick, userEmail }) => {
    const { t } = useTranslation();
    const postToFacebookUrl = useMemo(() => {
        const siteUrl = window.location.href;
        const encodedUrl = encodeURI(siteUrl);
        const fbUrl = `https://facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        return fbUrl;
    }, []);
    const mailItemUrl = useMemo(() => {
        const mailUrl = `mailto:${userEmail}`;
        return mailUrl;
    }, [userEmail]);
    const printItem = useCallback(() => {
        window.print();
    }, []);
    return (
        <div className={className}>
            {isLoggedIn && (
                <span
                    onClick={onFavoriteClick}
                    title={isFavorite ? t('lblRemoveFromFavorites') : t('lblAddToFavorites')}
                    className='ad-details-icon'
                >
                    <Star className={`ad-details-icon__svg ${isFavorite ? 'favorite' : ''}`} />
                </span>
            )}
            <a href={postToFacebookUrl} target='_blank' rel='noopener noreferrer' className='ad-details-icon'>
                <Facebook className='ad-details-icon__svg' />
            </a>
            <a href={mailItemUrl} target='_blank' rel='noopener noreferrer' className='ad-details-icon'>
                <Mail className='ad-details-icon__svg' />
            </a>
            <span onClick={printItem} className='ad-details-icon'>
                <Printer className='ad-details-icon__svg' />
            </span>
        </div>
    );
};
