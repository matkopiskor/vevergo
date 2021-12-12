import { FC } from 'react';

import { useTopbar } from './useTopbar';

import './Topbar.css';
import { Autocomplete } from '../autocomplete';
import { Logo } from '../logo/';
import { CurrenciesSelector } from '../currencies-selector';
import { LanguageSelector } from '../language-selector';

export const Topbar: FC = () => {
    const { isMobile } = useTopbar();
    return <div className="topbar">{isMobile ? <MobileTopbar /> : <DesktopTopbar />}</div>;
};

interface ITopbarProps {}

const MobileTopbar: FC = () => {
    return <div>mobile</div>;
};

const DesktopTopbar: FC<ITopbarProps> = () => {
    return (
        <div className="topbar__container">
            <div className="topbar__logo">
                <Logo />
            </div>
            <div className="topbar__autocomplete">
                <Autocomplete />
            </div>
            <div className="topbar__currency">
                <CurrenciesSelector />
            </div>
            <div className="topbar__language">
                <LanguageSelector />
            </div>
        </div>
    );
};
