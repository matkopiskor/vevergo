import { useCallback } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { clearSort } from '../../redux/reducers/homeViewReducer';
import { clearSearchText } from '../../redux/reducers/mainPageFilter';

export const useLogo = () => {
    const dispatch = useAppDispatch();
    const onClick = useCallback(() => {
        dispatch(clearSort());
        dispatch(clearSearchText());
    }, [dispatch]);
    return { onClick };
};
