import { FC } from 'react';
import './Card.css';

export const Card: FC = ({ children }) => {
    return <div className="card">{children}</div>;
};
