import { FC } from 'react';
import { PageContainer } from '../../components/page-container';
import { useAdDetails } from './useAdDetails';

import { AdDetailsIcons } from '../../components/ad-details-icons';

import './AdDetails.css';
import { AdDetailsPrice } from '../../components/ad-details-price';
import { ImageGallery } from '../../components/image-gallery';
import { trans } from '../../utils/mocks';
import HTMLReactParser from 'html-react-parser';
import { AdDetailsDetailsContainer } from '../../components/ad-details-details-container';
import { Mail, MapPin, Phone } from 'react-feather';

const AdDetails: FC = () => {
    const t = trans;
    const {
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
    } = useAdDetails();
    if (!ad) {
        return null;
    }
    const { item, media } = ad;
    const {
        listing_type_name,
        title,
        description,
        attributes,
        price_formatted,
        currency_name,
        converted_price_formatted,
        owner_nickname,
        expiry_date_formatted,
        change_date_formatted,
        create_date_formatted,
        view_count,
        owner_phone_number,
        owner_mobile_number,
        owner,
        measurement_unit_name,
        price_by_agreement,
        owner_name,
    } = item;
    const show_number = owner_mobile_number || owner_phone_number;
    return (
        <>
            <PageContainer>
                <div className='ad-details'>
                    <div className='ad-details__header'>
                        <span className='ad-details__header-title'>
                            <strong>{listing_type_name}</strong>: {title}
                        </span>
                        <AdDetailsIcons
                            isFavorite={isFavorite}
                            isLoggedIn={isLoggedIn}
                            className='ad-details-icon-wrapper-desktop'
                            onFavoriteClick={onFavoriteClick}
                            userEmail='test@tset.test'
                        />
                    </div>
                    <AdDetailsPrice
                        currency_name={currency_name}
                        price_formatted={price_formatted}
                        converted_price_formatted={converted_price_formatted}
                        measurement_unit_name={measurement_unit_name}
                        cn='ad-details-price__mobile'
                        shouldDisplaySeparator={'top'}
                        price_by_agreement={price_by_agreement}
                        activeCurrency={activeCurrencyName}
                    />
                    <div className='ad-details__main'>
                        <div className='ad-details__main-info'>
                            <div className='ad-details__main-swiper'>
                                {media.length !== 0 && <ImageGallery images={media} />}
                            </div>
                            <span className='ad-details__section-label'>
                                <strong>{t('lblDescription')}</strong>
                            </span>
                            <div className='ad-details-price__horizontal-separator ' />
                            <span className='ad-details__section-text'>{HTMLReactParser(description)}</span>
                            <span className='ad-details__section-label'>
                                <strong>{t('lblDetails')}</strong>
                            </span>
                            <div className='ad-details-price__horizontal-separator ' />
                            <AdDetailsDetailsContainer attributes={attributes} />
                            <div className='ad-details-price__horizontal-separator ' />
                        </div>
                        <div className='ad-details__empty-segment' />
                        <div className='ad-details__price-segment'>
                            <AdDetailsPrice
                                currency_name={currency_name}
                                price_formatted={price_formatted}
                                converted_price_formatted={converted_price_formatted}
                                measurement_unit_name={measurement_unit_name}
                                cn='ad-details-price'
                                shouldDisplaySeparator={'bottom'}
                                price_by_agreement={price_by_agreement}
                                activeCurrency={activeCurrencyName}
                            />
                            <span className='ad-details-price__segment-text'>
                                {t('lblPostedBy')}:{' '}
                                <a href={userLink}>
                                    {owner_nickname}
                                    {owner_name !== null ? ` (${owner_name})` : ''}
                                </a>
                            </span>
                            <a
                                href={placeLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='ad-details__segmnet-link'
                            >
                                <MapPin size={15} className='ad-details__mappin' />
                                <span className='ad-details__segmnet-link-text'>{placeText}</span>
                            </a>
                            <span className='ad-details-price__segment-text'>
                                {t('lblValidTo')}: {expiry_date_formatted}
                            </span>
                            <div className='ad-details-price__horizontal-separator ' />
                            <div className='ad-details__contact-container'>
                                {isLoggedIn && userId !== owner && (
                                    <div className='ad-details__phone-button' onClick={() => setModalOpen(true)}>
                                        <Mail />
                                        {t('lblContactOwner')}
                                    </div>
                                )}
                                {show_number && (
                                    <div>
                                        <a href={`tel:${show_number}`} className='ad-details__phone-button'>
                                            <Phone />
                                            {show_number}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <AdDetailsIcons
                        isFavorite={isFavorite}
                        isLoggedIn={isLoggedIn}
                        className='ad-details-icon-wrapper-mobile'
                        onFavoriteClick={onFavoriteClick}
                        userEmail='test@tset.test'
                    />
                    <div className='ad-details__footer'>
                        <span onClick={() => setReportModalOpen(true)} className='ad-details__footer-text report-item'>
                            {t('lblReportItem')}
                        </span>
                        <span className='ad-details__footer-text'>
                            {t('lblCreated')}: <strong>{create_date_formatted}</strong>, {t('lblChanged')}:{' '}
                            <strong>{change_date_formatted}</strong>, {t('lblViews')}: <strong>{view_count}</strong>
                        </span>
                    </div>
                </div>
            </PageContainer>
        </>
    );
};

export default AdDetails;
