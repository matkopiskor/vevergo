import { FC } from 'react';
import { IMainPageItem } from '../../dto/mainPageDto';
import { GridItem } from '../grid-item';

import './GridItems.css';

interface IGridItemsProps {
    items: IMainPageItem[];
}

export const GridItems: FC<IGridItemsProps> = ({ items }) => {
    return (
        <div className="grid-items">
            {items.map((item, idx) => (
                <GridItem key={item.id + '_' + idx} item={item} />
            ))}
        </div>
    );
};
