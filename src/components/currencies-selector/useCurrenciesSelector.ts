import { useCallback, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActive as setActiveCurr } from '../../redux/reducers/currenciesReducer';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useCurrenciesSelector = (isMobile?: boolean) => {
    const dispatch = useAppDispatch();
    const { list, active } = useAppSelector((state) => state.currencies);
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

    const activeCurrName = useMemo(() => {
        const { name } = list.find(({ id }) => id === active)!;
        return name;
    }, [list, active]);

    const setActive = useCallback(
        (id: number) => {
            dispatch(setActiveCurr(id));
            toggleOpen(true);
        },
        [dispatch, toggleOpen]
    );

    useOutsideClickListener(currRef, isMobile ? undefined : () => toggleOpen(true));

    return {
        list,
        activeCurrName,
        active,
        setActive,
        open,
        toggleOpen,
        currRef,
    };
};
