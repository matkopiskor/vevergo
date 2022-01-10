import { FC } from 'react';
import { useUserSelector } from './useUserSelector';
import './UserSelector.css';
import { Icon, LogIn, LogOut } from 'react-feather';

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
        id: 'logOut',
        name: 'lblLogout',
        Icon: LogOut,
        action: 'logout',
    },
];

export const UserSelector: FC = () => {
    const { t, currRef, imgSrc, open, toggleOpen, isLoggedIn, logout } = useUserSelector();
    return (
        <div ref={currRef} className='user-selector'>
            <div className='user-selector__avatar' onClick={() => toggleOpen()}>
                <img src={imgSrc} alt='avatar' />
            </div>
            {open && (
                <div className='user-selector__list'>
                    {!isLoggedIn &&
                        isLoggedOutItems.map(({ id, name, Icon, path }) => (
                            <a href={path} key={id} className='user-selector__item'>
                                <Icon size={15} className='user-selector__item-icon' /> {t(name)}
                            </a>
                        ))}
                    {!!isLoggedIn &&
                        isLoggedInItems.map(({ id, name, Icon, action, path }) => {
                            if (!!path) {
                                // TODO
                                return null;
                            }
                            if (action === 'logout') {
                                return (
                                    <span key={id} className='user-selector__item' onClick={logout}>
                                        <Icon size={15} className='user-selector__item-icon' /> {t(name)}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    <div key='1000' className='user-selector__item update'>
                        Last update: 30.12.2021. 12:50 Other filters UI (missing implementation), fixes
                    </div>
                </div>
            )}
        </div>
    );
};
