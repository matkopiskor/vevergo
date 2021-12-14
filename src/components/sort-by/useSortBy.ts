import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { sortByOptions } from '../../constants/sortByOptions';
import { useIsMobile } from '../../context/useIsMobile';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSort } from '../../redux/reducers/homeViewReducer';
import { trans } from '../../utils/mocks';
import { useAppHistory } from '../../utils/useAppHistory';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useSortBy = () => {
    const { state, goTo, path } = useAppHistory();
    const t = trans;
    const sortValueId = useAppSelector((state) => state.homeView.sortValue);
    const dispatch = useAppDispatch();
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);
    const currRef = useRef(null);

    const toggleOpen = useCallback(
        (forceClose?: boolean) => {
            if (forceClose) {
                setOpen(false);
                return;
            }
            setOpen(!open);
        },
        [open]
    );

    const setActiveSort = useCallback(
        (value: number | undefined) => {
            goTo(path, false, { sortBy: value });
            toggleOpen(true);
        },
        [goTo, path, toggleOpen]
    );

    const sortValue = useMemo(() => {
        return sortByOptions.find(({ value }) => value === sortValueId)?.label;
    }, [sortValueId]);

    useOutsideClickListener(currRef, isMobile ? undefined : () => toggleOpen(true));

    useEffect(() => {
        dispatch(setSort(state?.sortBy));
    }, [dispatch, state]);

    return {
        setActiveSort,
        open,
        toggleOpen,
        currRef,
        t,
        sortValue,
        sortValueId,
    };
};
