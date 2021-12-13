import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActive } from '../../redux/reducers/homeViewReducer';

export const useChangeListGridView = () => {
    const dispatch = useAppDispatch();
    const view = useAppSelector((state) => state.homeView.active);

    console.log(view);

    const setActiveView = useCallback(
        (active: 'list' | 'grid') => {
            dispatch(setActive(active));
        },
        [dispatch],
    );
    return {
        view,
        setActiveView,
    };
};
