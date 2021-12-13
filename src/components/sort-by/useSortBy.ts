import { useCallback, useMemo, useRef, useState } from 'react';
import { sortByOptions } from '../../constants/sortByOptions';
import { useIsMobile } from '../../context/useIsMobile';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSort } from '../../redux/reducers/homeViewReducer';
import { trans } from '../../utils/mocks';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useSortBy = () => {
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
        [open],
    );

    const setActiveSort = useCallback(
        (value: number) => {
            dispatch(setSort(value));
            toggleOpen(true);
        },
        [dispatch, toggleOpen],
    );

    const sortValue = useMemo(() => {
        return sortByOptions.find(({ value }) => value === sortValueId)?.label;
    }, [sortValueId]);

    useOutsideClickListener(currRef, isMobile ? undefined : () => toggleOpen(true));

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
