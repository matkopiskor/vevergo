import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import './Home';
import { useHome } from './useHome';

const Home: FC = () => {
    const { items } = useHome();
    return (
        <div className="home">
            {/* bunch of todos */}
            <div>
                {/* <InfiniteScroll /> */}
            </div>
        </div>
    )
}

export default Home;
