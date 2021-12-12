import { FC } from 'react';
import { useSettingsSelector } from './useSettingsSelector';
import './SettingsSelector.css';
import { Settings } from 'react-feather';
import { CurrenciesSelector } from '../currencies-selector';
import { LanguageSelector } from '../language-selector';

export const SettingsSelector: FC = () => {
    const { currRef, toggleOpen, open } = useSettingsSelector();
    return (
        <div ref={currRef} className="settings-selector">
            <div className="settings-selector__icon-wrapper" onClick={() => toggleOpen()}>
                <Settings className="settings-selector__icon" />
            </div>
            {open && (
                <div className="settings-selector__list">
                    <CurrenciesSelector isMobile />
                    <LanguageSelector />
                </div>
            )}
        </div>
    );
};
