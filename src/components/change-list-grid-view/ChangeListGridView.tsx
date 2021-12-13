import { FC } from 'react';
import { Grid, List } from 'react-feather';
import './ChangeListGridView.css';
import { useChangeListGridView } from './useChangeListGridView';

export const ChangeListGridView: FC = () => {
    const { view, setActiveView } = useChangeListGridView();
    return (
        <>
            <div
                className={`change-grid-list-view__button${
                    view === 'grid' ? ' change-grid-list-view__button-active' : ''
                }`}
                onClick={() => setActiveView('grid')}
            >
                <Grid />
            </div>
            <div
                className={`change-grid-list-view__button${
                    view === 'list' ? ' change-grid-list-view__button-active' : ''
                }`}
                onClick={() => setActiveView('list')}
            >
                <List />
            </div>
        </>
    );
};
