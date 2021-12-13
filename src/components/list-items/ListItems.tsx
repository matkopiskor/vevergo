import { FC } from 'react';
import { IMainPageItem } from '../../dto/mainPageDto';
import { ListItem } from '../list-item';

import './ListItems.css';

interface IListItemsProps {
    items: IMainPageItem[];
}

export const ListItems: FC<IListItemsProps> = ({ items }) => {
    return (
        <div className='list-items'>
            {items.map((item, idx) => (
                <ListItem key={item.id + '_' + idx} item={item} />
            ))}
        </div>
    );
};
