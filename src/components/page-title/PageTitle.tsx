import { FC } from 'react';

import './PageTitle.css';

interface IProps {
    title: string;
}

export const PageTitle: FC<IProps> = ({ title }) => {
    return <h3 className='page-title'>{title}</h3>;
};
