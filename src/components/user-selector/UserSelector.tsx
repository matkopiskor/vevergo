import { FC } from 'react';
import { useUserSelector } from './useUserSelector';
import './UserSelector.css';
import { CheckSquare, Icon, LogIn, LogOut, Star, User } from 'react-feather';
import { Link } from 'react-router-dom';

const isLoggedOutItems = [
    {
        id: 'logIn',
        name: 'lblLogin',
        Icon: LogIn,
        path: '/login',
    },
];

interface ILoggedInItem {
    id: string;
    name: string;
    Icon: Icon;
    path?: string;
    action?: string;
}

const isLoggedInItems: ILoggedInItem[] = [
    {
        id: 'myItems',
        name: 'lblMyItems',
        Icon: CheckSquare,
        path: '/my-items',
    },
    {
        id: 'favoriteItems',
        name: 'lblFavoriteItems',
        Icon: Star,
        path: '/favorite-items',
    },
    {
        id: 'userProfile',
        name: 'lblUserProfile',
        Icon: User,
        path: '/profile',
    },
    {
        id: 'logOut',
        name: 'lblLogout',
        Icon: LogOut,
        action: 'logout',
    },
];

const isOrgItems: ILoggedInItem[] = [
    {
        id: 'myItems',
        name: 'lblMyItems',
        Icon: CheckSquare,
        path: '/my-items',
    },
    {
        id: 'favoriteItems',
        name: 'lblFavoriteItems',
        Icon: Star,
        path: '/favorite-items',
    },
    {
        id: 'organizationProfile',
        name: 'lblOrganizationProfile',
        Icon: User,
        path: '/organization',
    },
    {
        id: 'backToPersonal',
        name: 'lblBackToPersonal',
        Icon: LogOut,
        action: 'back-to-personal',
    },
];

export const UserSelector: FC = () => {
    const { t, currRef, imgSrc, open, toggleOpen, isLoggedIn, logout, isOrg, backToPersonal } = useUserSelector();

    return (
        <div ref={currRef} className="user-selector">
            <div className="user-selector__avatar" onClick={() => toggleOpen()}>
                <img src={imgSrc} alt="avatar" />
            </div>
            {open && (
                <div className="user-selector__list">
                    {!isLoggedIn &&
                        isLoggedOutItems.map(({ id, name, Icon, path }) => (
                            <Link to={path} key={id} className="user-selector__item" onClick={() => toggleOpen()}>
                                <Icon size={15} className="user-selector__item-icon" /> {t(name)}
                            </Link>
                        ))}
                    {!!isLoggedIn &&
                        !isOrg &&
                        isLoggedInItems.map(({ id, name, Icon, action, path }) => {
                            if (!!path) {
                                return (
                                    <Link
                                        to={path}
                                        key={id}
                                        className="user-selector__item"
                                        onClick={() => toggleOpen()}
                                    >
                                        <Icon size={15} className="user-selector__item-icon" /> {t(name)}
                                    </Link>
                                );
                            }
                            if (action === 'logout') {
                                return (
                                    <span
                                        key={id}
                                        className="user-selector__item user-selector__item-logout"
                                        onClick={() => {
                                            toggleOpen();
                                            logout();
                                        }}
                                    >
                                        <Icon size={15} className="user-selector__item-icon" /> {t(name)}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    {!!isLoggedIn &&
                        isOrg &&
                        isOrgItems.map(({ id, name, Icon, action, path }) => {
                            if (!!path) {
                                return (
                                    <Link
                                        to={path}
                                        key={id}
                                        className="user-selector__item"
                                        onClick={() => toggleOpen()}
                                    >
                                        <Icon size={15} className="user-selector__item-icon" /> {t(name)}
                                    </Link>
                                );
                            }
                            if (action === 'back-to-personal') {
                                return (
                                    <span
                                        key={id}
                                        className="user-selector__item user-selector__item-logout"
                                        onClick={() => {
                                            toggleOpen();
                                            backToPersonal();
                                        }}
                                    >
                                        <Icon size={15} className="user-selector__item-icon" /> {t(name)}
                                    </span>
                                );
                            }
                            return null;
                        })}
                </div>
            )}
        </div>
    );
};
