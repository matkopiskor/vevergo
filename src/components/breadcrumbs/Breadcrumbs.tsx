import { FC } from 'react';
import { ChevronsRight } from 'react-feather';

import './Breadcrumbs.css';
import { useBreadcrumbs } from './useBreadcrumbs';

export const Breadcrumbs: FC = () => {
    const { breadcrumbs, onBreadcrumbClick } = useBreadcrumbs();
    if (breadcrumbs.length === 0) {
        return null;
    }
    return (
        <div className='breadcrumbs'>
            {breadcrumbs.map(({ id, name }, idx, src) => {
                return (
                    <div key={id + '_' + idx} style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='breadcrumbs__item' onClick={() => onBreadcrumbClick(id)}>
                            {name}
                        </div>
                        {idx !== src.length - 1 && <ChevronsRight size={14} />}
                    </div>
                );
            })}
        </div>
    );
};
