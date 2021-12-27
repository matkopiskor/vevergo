import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { CategoryFilters } from '../../components/category-filters';
import { ChangeListGridView } from '../../components/change-list-grid-view';
import { GridItems } from '../../components/grid-items';
import { ListItems } from '../../components/list-items';
import { Sidebar } from '../../components/sidebar';
import { SortBy } from '../../components/sort-by';

import './Home.css';
import { useHome } from './useHome';

const Home: FC = () => {
    const { items = [], totalCount, t, getNextItems, activeView, isMobile, homeClassName } = useHome();
    return (
        <div className={`home ${isMobile ? '' : 'home-desktop'}`}>
            <Sidebar />

            <div className={homeClassName}>
                <div className='home__breadcrumbs'>
                    <Breadcrumbs />
                </div>
                <div className='home__header'>
                    <span className='home__total-count'>
                        {totalCount} {t('lblResultsFound')}
                    </span>
                    {!isMobile && (
                        <div className='home__actions'>
                            <CategoryFilters />
                            <SortBy />
                            <ChangeListGridView />
                        </div>
                    )}
                </div>
                {items.length !== 0 && (
                    <InfiniteScroll
                        dataLength={items.length}
                        next={getNextItems}
                        hasMore={items.length < totalCount}
                        loader={<h4>Loading...</h4>}
                    >
                        {activeView === 'grid' || isMobile ? <GridItems items={items} /> : <ListItems items={items} />}
                    </InfiniteScroll>
                )}
            </div>
        </div>
    );
};

export default Home;
