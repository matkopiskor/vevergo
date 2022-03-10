import { FC } from 'react';
import './ProfileInfoItem.css';

export const ProfileInfoItem: FC = ({ children }) => {
    return <div className="profile-info-item">{children}</div>;
};
