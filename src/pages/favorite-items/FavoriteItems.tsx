import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/page-title/PageTitle';
import { Watchlist } from '../../components/watchlist';

import './FavoriteItems.css';

const FavoriteItems: FC = () => {
    const { t } = useTranslation();
    return (
        <div className='favorite-items'>
            <PageTitle title={t('lblFavoriteItems')} />
            <Watchlist />
        </div>
    );
};

export default FavoriteItems;
