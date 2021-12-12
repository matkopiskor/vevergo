import { FC } from 'react';
import './UserSelector.css';
import { useUserSelector } from './useUserSelector';

export const UserSelector: FC = () => {
    const { currRef, imgSrc, open, toggleOpen } = useUserSelector();
    return (
        <div ref={currRef} className="user-selector">
            <div className="user-selector__avatar" onClick={() => toggleOpen()}>
                <img src={imgSrc} alt="avatar" />
            </div>
            {open && (
                <div className="user-selector__list">
                    <div key="1" className="user-selector__item">
                        Last update: 12.12.2021. 9:24
                    </div>
                </div>
            )}
        </div>
    );
};
