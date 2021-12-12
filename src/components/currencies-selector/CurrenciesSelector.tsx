import { FC } from 'react';
import './CurrenciesSelector.css';
import { useCurrenciesSelector } from './useCurrenciesSelector';

export const CurrenciesSelector: FC = () => {
    const { list, active } = useCurrenciesSelector();
    return <div></div>;
};
