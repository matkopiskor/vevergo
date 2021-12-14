import { FC } from 'react';
import { useSortBy } from './useSortBy';
import './SortBy.css';
import { sortByOptions } from '../../constants/sortByOptions';
import { X } from 'react-feather';

export const SortBy: FC = () => {
    const { open, toggleOpen, t, currRef, setActiveSort, sortValue, sortValueId } = useSortBy();
    return (
        <div ref={currRef} className="sort-by">
            <div className="sort-by__button" onClick={() => toggleOpen()}>
                {!!sortValue ? t(sortValue) : t('lblSortBy')}
                {!!sortValue && (
                    <X
                        className="sort-by__close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveSort(undefined);
                        }}
                    />
                )}
                {open ? <OpenArrow /> : <ClosedArrow />}
            </div>
            {open && (
                <div className="sort-by__list">
                    {sortByOptions.map(({ value, label }) => (
                        <div
                            key={value}
                            className={`sort-by__item${sortValueId === value ? ' sort-by__item-active' : ''}`}
                            onClick={() => setActiveSort(value)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const OpenArrow: FC = () => <span className="sort-by__button-open" />;
const ClosedArrow: FC = () => <span className="sort-by__button-closed" />;
