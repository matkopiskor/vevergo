import { FC } from 'react';
import { TopbarButton } from '../topbar-button';
import './CurrenciesSelector.css';
import { useCurrenciesSelector } from './useCurrenciesSelector';

export const CurrenciesSelector: FC = () => {
    const { list, active, setActive, activeCurrName, open, toggleOpen, currRef } = useCurrenciesSelector();
    return (
        <div ref={currRef} className="currencies-selector">
            <TopbarButton open={open} label={activeCurrName} onClick={() => toggleOpen()} />
            {open && (
                <div className="currencies-selector__list">
                    {list.map(({ id, name }) => (
                        <div
                            key={id}
                            className={`currencies-selector__item${
                                active === id ? ' currencies-selector__item-active' : ''
                            }`}
                            onClick={() => setActive(id)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
