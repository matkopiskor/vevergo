import { FC } from 'react';
import { trans } from '../../utils/mocks';

import './AdDetailsPrice.css';

interface IProps {
    currency_name: string;
    price_formatted: string;
    converted_price_formatted: string;
    measurement_unit_name: string;
    cn: string;
    shouldDisplaySeparator: 'top' | 'bottom';
    price_by_agreement: string;
    activeCurrency: string;
}

export const AdDetailsPrice: FC<IProps> = ({
    currency_name,
    price_formatted,
    converted_price_formatted,
    measurement_unit_name,
    cn,
    shouldDisplaySeparator,
    price_by_agreement,
    activeCurrency,
}) => {
    const t = trans;
    return (
        <div className={cn}>
            {shouldDisplaySeparator === 'top' && <div className='ad-details-price__horizontal-separator' />}
            <h2>
                <strong>
                    {currency_name === activeCurrency
                        ? price_formatted
                        : !converted_price_formatted && !price_formatted
                        ? null
                        : `≈ ${converted_price_formatted}`}{' '}
                    {!converted_price_formatted && !price_formatted
                        ? !!price_by_agreement
                            ? t('lblPriceByAgreement')
                            : null
                        : activeCurrency}
                    {!!measurement_unit_name && '/'}
                    {measurement_unit_name}
                </strong>
            </h2>
            {currency_name !== activeCurrency && (
                <span className='ad-details-price__segment-text'>
                    {price_formatted} {currency_name}
                    {!!measurement_unit_name && '/'}
                    {measurement_unit_name}
                </span>
            )}
            {shouldDisplaySeparator === 'bottom' && <div className='ad-details-price__horizontal-separator' />}
        </div>
    );
};
