import { FC } from 'react';

import { useOrganizationsSelector } from './useOrganizationsSelector';

import './OrganizationsSelector.css';
import { TopbarButton } from '../topbar-button';

interface IOrganizationsSelectorProps {
    isMobile?: boolean;
    toggleParentOpen?: any;
}

export const OrganizationsSelector: FC<IOrganizationsSelectorProps> = ({ isMobile, toggleParentOpen }) => {
    const { list, active, setActive, activeOrgName, open, toggleOpen, currRef } = useOrganizationsSelector(isMobile);
    return (
        <div ref={currRef} className="organizations-selector">
            <TopbarButton open={open} label={activeOrgName ?? 'Organization'} onClick={() => toggleOpen()} />
            {open && (
                <div className="organizations-selector__list">
                    {list.map(({ id, name }) => (
                        <div
                            key={id!}
                            className={`organizations-selector__item${
                                active === id ? ' organizations-selector__item-active' : ''
                            }`}
                            onClick={() => {
                                setActive(id!);
                                toggleParentOpen && toggleParentOpen();
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
