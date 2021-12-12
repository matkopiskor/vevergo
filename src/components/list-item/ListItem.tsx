import { FC } from 'react';
import { IMainPageItem } from '../../dto/mainPageDto';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

interface IListItem {
    item: IMainPageItem;
}

export const ListItem: FC<IListItem> = ({ item }) => {
    const { id, country_name, place, description } = item;
    const adUrl = '/item/id';
    const placeText = [country_name, place].filter(Boolean).join(', ');
    const priorityAttributes = null;
    const itemDescription = createDescription(description);
    return (
        <Card className="list-item">
            <Link to={adUrl}>
                <div className="card-content"></div>
            </Link>
        </Card>
    );
};

const createDescription = (description: string) => {
    const container = document.createElement('div');
    container.innerHTML = description;
    const elements = Array.from(container.childNodes) as any[];
    const textElements = [];
    for (let element of elements) {
        let text = '';
        if (element.tagName === 'UL') {
            const innerElements = element.childNodes;
            let innerTextElements = [];
            for (let innerElement of innerElements) {
                const innerText = innerElement.textContent || innerElement.innerText || null;
                if (innerText !== null && innerText.length !== 0) {
                    innerTextElements.push(innerText);
                }
            }
            text = innerTextElements.join(' ');
        } else {
            text = element.textContent || element.innerText || null;
        }
        if (text !== null && text.length !== 0) {
            textElements.push(text);
        }
    }
    return textElements.join(' ');
};
