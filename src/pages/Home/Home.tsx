import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ListItems } from '../../components/list-items';
import { SortBy } from '../../components/sort-by';

import './Home.css';
import { useHome } from './useHome';

const Home: FC = () => {
    const { items, totalCount, t } = useHome();
    const view = 'list';
    return (
        <div className='home'>
            {/* bunch of todos */}
            <div className='home__header'>
                <span className='home__total-count'>
                    {totalCount} {t('lblResultsFound')}
                </span>
                <div className='home__sort-by'>
                    <SortBy />
                </div>
            </div>
            {items.length !== 0 && (
                <InfiniteScroll
                    dataLength={items.length}
                    next={() => {}}
                    hasMore={items.length < totalCount}
                    loader={<h4>Loading...</h4>}
                >
                    {view === 'list' ? <ListItems items={items} /> : <ListItems items={items} />}
                </InfiniteScroll>
            )}
        </div>
    );
};

export default Home;
