import { FC } from 'react';

import './PageContainer.css';

export const PageContainer: FC = ({ children }) => {
    return <div className='page-container'>{children}</div>;
};
