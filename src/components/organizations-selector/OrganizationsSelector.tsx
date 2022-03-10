import { FC } from 'react';

import { useOrganizationsSelector } from './useOrganizationsSelector';

import './OrganizationsSelector.css';
import { TopbarButton } from '../topbar-button';

interface IOrganizationsSelectorProps {
    isMobile?: boolean;
}

export const OrganizationsSelector: FC<IOrganizationsSelectorProps> = ({ isMobile }) => {
    const { list, active, setActive, activeOrgName, open, toggleOpen, currRef } = useOrganizationsSelector(isMobile);
    return (
        <div ref={currRef} className="languages-selector">
            <TopbarButton open={open} label={activeOrgName ?? 'Organization'} onClick={() => toggleOpen()} />
            {open && (
                <div className="languages-selector__list">
                    {list.map(({ id, name }) => (
                        <div
                            key={id!}
                            className={`languages-selector__item${
                                active === id ? ' languages-selector__item-active' : ''
                            }`}
                            onClick={() => {
                                setActive(id!);
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
