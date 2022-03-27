import { FC } from 'react';

import { useLanguageSelector } from './useLanguageSelector';

import './LanguageSelector.css';
import { TopbarButton } from '../topbar-button';

interface ILanguageSelectorProps {
    isMobile?: boolean;
    toggleParentOpen?: any;
}

export const LanguageSelector: FC<ILanguageSelectorProps> = ({ isMobile, toggleParentOpen }) => {
    const { list, active, setActive, activeLangName, open, toggleOpen, currRef } = useLanguageSelector(isMobile);
    return (
        <div ref={currRef} className="languages-selector">
            <TopbarButton open={open} label={activeLangName} onClick={() => toggleOpen()} />
            {open && (
                <div className="languages-selector__list">
                    {list.map(({ id, name }) => (
                        <div
                            key={id}
                            className={`languages-selector__item${
                                active === id ? ' languages-selector__item-active' : ''
                            }`}
                            onClick={() => {
                                setActive(id);
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
