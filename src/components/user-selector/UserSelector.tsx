import { FC } from 'react';
import './UserSelector.css';
import { useUserSelector } from './useUserSelector';

export const UserSelector: FC = () => {
    const { currRef, imgSrc, open, toggleOpen } = useUserSelector();
    return (
        <div ref={currRef} className='user-selector'>
            <div className='user-selector__avatar' onClick={() => toggleOpen()}>
                <img src={imgSrc} alt='avatar' />
            </div>
            {open && (
                <div className='user-selector__list'>
                    <div key='1' className='user-selector__item'>
                        Last update: 27.12.2021. 15:14 Common filters working (style not done)
                    </div>
                </div>
            )}
        </div>
    );
};
