import { useCallback } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { clearSort } from '../../redux/reducers/homeViewReducer';
import { clearSearchText } from '../../redux/reducers/mainPageFilter';
import { useAppHistory } from '../../utils/useAppHistory';

export const useLogo = () => {
    const { state, path, goTo } = useAppHistory();
    const dispatch = useAppDispatch();
    const onClick = useCallback(() => {
        dispatch(clearSort());
        dispatch(clearSearchText());
        goTo(path, !state, {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return { onClick };
};
