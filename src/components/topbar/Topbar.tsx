import { FC } from 'react';

import { useTopbar } from './useTopbar';

import './Topbar.css';
import { Autocomplete } from '../autocomplete';
import { Logo } from '../logo/';
import { CurrenciesSelector } from '../currencies-selector';
import { LanguageSelector } from '../language-selector';
import { UserSelector } from '../user-selector';
import { SettingsSelector } from '../settings-selector';
import { Menu } from 'react-feather';
import { OrganizationsSelector } from '../organizations-selector';

export const Topbar: FC = () => {
    const { isMobile, isHome, onSidebarMenuClick, isLoggedIn } = useTopbar();
    return (
        <div className={`topbar ${isHome ? 'topbar-home' : ''} ${isMobile ? '' : 'topbar-desktop'}`}>
            {isMobile ? (
                <MobileTopbar isHome={isHome} onSidebarMenuClick={onSidebarMenuClick} />
            ) : (
                <DesktopTopbar isHome={isHome} isLoggedIn={isLoggedIn} />
            )}
        </div>
    );
};

interface IMobileTopbarProps {
    isHome: boolean;
    onSidebarMenuClick: () => void;
}

const MobileTopbar: FC<IMobileTopbarProps> = ({ isHome, onSidebarMenuClick }) => {
    return (
        <>
            <div className="topbar__container topbar__container-mobile">
                <div className="topbar__left-actions">
                    {isHome && (
                        <div className="topbar__sidebar-menu">
                            <Menu size={26} onClick={onSidebarMenuClick} />
                        </div>
                    )}
                    <div className="topbar__logo-mobile">
                        <Logo />
                    </div>
                </div>
                <div className="topbar__mobile-buttons">
                    <div className="topbar-settings">
                        <SettingsSelector />
                    </div>
                    <div className="topbar__user-mobile">
                        <UserSelector />
                    </div>
                </div>
            </div>
            {isHome && (
                <div className="topbar__container topbar__container-mobile">
                    <div className="topbar__autocomplete-mobile">
                        <Autocomplete />
                    </div>
                </div>
            )}
        </>
    );
};

interface IDesktopTopbarProps {
    isHome: boolean;
    isLoggedIn: boolean;
}

const DesktopTopbar: FC<IDesktopTopbarProps> = ({ isHome, isLoggedIn }) => {
    return (
        <div className="topbar__container">
            <div className="topbar__logo">
                <Logo />
            </div>
            <div className="topbar__autocomplete">{isHome && <Autocomplete />}</div>
            <div className="topbar__currency">
                <CurrenciesSelector />
            </div>
            <div className="topbar__language">
                <LanguageSelector />
            </div>
            {isLoggedIn && (
                <div className="topbar__language">
                    <OrganizationsSelector />
                </div>
            )}
            <div className="topbar__user">
                <UserSelector />
            </div>
        </div>
    );
};
