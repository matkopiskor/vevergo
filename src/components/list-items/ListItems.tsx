import { FC } from 'react';
import { IMainPageItem } from '../../dto/mainPageDto';

interface IListItemsProps {
    items: IMainPageItem[];
}

export const ListItems: FC<IListItemsProps> = ({ items }) => {
    return <div className="list-items"></div>;
};
