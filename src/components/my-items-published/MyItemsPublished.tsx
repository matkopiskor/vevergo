import { FC } from 'react';

import './style.css';

interface IProps {
    items: any[];
}

export const MyItemsPublished: FC<IProps> = () => {
    return <div className="published">My Items Published</div>;
};
