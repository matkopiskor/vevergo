import { FC } from 'react';
import { IMainPageItem } from '../../dto/mainPageDto';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useListItem } from './useListItem';
import { ContentImageView } from '../content-image-view';
import { MapPin } from 'react-feather';

interface IListItem {
    item: IMainPageItem;
}

const userCurrencyName = null;

export const ListItem: FC<IListItem> = ({ item }) => {
    const {
        t,
        adUrl,
        placeText,
        priorityAttributes,
        trimmedItemDescription,
        listing_type_name,
        default_image,
        title,
        id,
        itemDescription,
        currency_name,
        price_formatted,
        converted_price_formatted,
        price_by_agreement,
        measurement_unit_name,
        owner_nickname,
        owner_name,
        create_date_formatted,
        view_count,
    } = useListItem(item);
    return (
        <Card className='list-item'>
            <Link to={adUrl}>
                {' '}
                <div className='card-content'>
                    <ContentImageView defaultImage={default_image} title={title} itemId={id} />
                    <div className='item-main-wrapper'>
                        <h6 className='item-title' title={title}>
                            <strong>{listing_type_name}:</strong> {title}
                        </h6>
                        {priorityAttributes && (
                            <span className='item-attributes' title={priorityAttributes}>
                                {priorityAttributes}
                            </span>
                        )}
                        <span className='item-description' title={itemDescription}>
                            {trimmedItemDescription}
                        </span>
                    </div>
                    <div className='item-additional-content'>
                        <div className='item-price-wrapper'>
                            <h6 className='item-price'>
                                {currency_name === userCurrencyName
                                    ? price_formatted
                                    : converted_price_formatted === null && price_formatted === null
                                    ? null
                                    : `≈ ${converted_price_formatted}`}{' '}
                                {converted_price_formatted === null && price_formatted === null
                                    ? price_by_agreement === true
                                        ? t('lblPriceByAgreement')
                                        : null
                                    : userCurrencyName}
                                {measurement_unit_name !== null && '/'}
                                {measurement_unit_name}
                            </h6>
                            {currency_name !== userCurrencyName && (
                                <h6 className='item-price-second'>
                                    {price_formatted} {currency_name}
                                    {measurement_unit_name !== null && '/'}
                                    {measurement_unit_name}
                                </h6>
                            )}
                        </div>
                        <div className='item-owner-wrapper'>
                            <p className='item-owner'>
                                <span>{t('lblPostedBy')}: </span>
                                {owner_nickname}
                                {owner_name !== null ? ` (${owner_name})` : ''}
                            </p>
                        </div>
                        <div className='item-location-wrapper'>
                            <MapPin size={15} className='item-location-pin' />
                            <span className='item-location'>{placeText}</span>
                        </div>
                        <div className='item-created-wrapper'>
                            <div className='item-created-desktop'>
                                <span className='item-created'>
                                    {t('lblCreated')}: <strong>{create_date_formatted}</strong>
                                </span>
                                <span className='item-created'>
                                    {t('lblViews')}: <strong>{view_count}</strong>
                                </span>
                            </div>
                            <div className='item-created-mobile'>
                                <span className='item-created'>
                                    {t('lblCreated')}: <strong>{create_date_formatted}</strong>, {t('lblViews')}:{' '}
                                    <strong>{view_count}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Card>
    );
};
