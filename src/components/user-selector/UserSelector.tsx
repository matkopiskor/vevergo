import { FC } from 'react';
import { useUserSelector } from './useUserSelector';
import './UserSelector.css';
import { LogIn } from 'react-feather';

const isLoggedOutItems = [
    {
        id: 'logIn',
        name: 'lblLogin',
        Icon: LogIn,
        path: '/login',
    },
];

export const UserSelector: FC = () => {
    const { t, currRef, imgSrc, open, toggleOpen, isLoggedIn } = useUserSelector();
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
                    <div key='1000' className='user-selector__item update'>
                        Last update: 30.12.2021. 12:50 Other filters UI (missing implementation), fixes
                    </div>
                </div>
            )}
        </div>
    );
};
