import { FC } from 'react';
import { Filter } from 'react-feather';

import './CategoryFilters.css';
import { CFForm } from './CFForm';
import { useCategoryFilters } from './useCategoryFilters';

export const CategoryFilters: FC = () => {
    const { applyFilters, activeAttributes, open, setOpen, commonFilters } = useCategoryFilters();
    return (
        <>
            <div className="category-filters__button" onClick={() => setOpen(true)}>
                <Filter />
            </div>
            {open && (
                <CFForm
                    open={open}
                    setOpen={setOpen}
                    applyFilters={applyFilters}
                    activeAttributes={activeAttributes}
                    initialValues={commonFilters}
                />
            )}
        </>
    );
};
