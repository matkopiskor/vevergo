import { FC } from 'react';
import { useSortBy } from './useSortBy';
import './SortBy.css';
import { sortByOptions } from '../../constants/sortByOptions';

export const SortBy: FC = () => {
    const { open, toggleOpen, t, currRef } = useSortBy();
    const active = -1;
    return (
        <div ref={currRef} className='sort-by'>
            <div className='sort-by__button' onClick={() => toggleOpen()}>
                {t('lblSortBy')}
                {open ? <OpenArrow /> : <ClosedArrow />}
            </div>
            {open && (
                <div className='sort-by__list'>
                    {sortByOptions.map(({ value, label }) => (
                        <div
                            key={value}
                            className={`sort-by__item${active === value ? ' sort-by__item-active' : ''}`}
                            onClick={() => {}}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const OpenArrow: FC = () => <span className='sort-by__button-open' />;
const ClosedArrow: FC = () => <span className='sort-by__button-closed' />;
