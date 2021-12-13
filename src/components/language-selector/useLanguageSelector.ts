import { useCallback, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActive as setActiveLang } from '../../redux/reducers/langugagesReducer';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useLanguageSelector = (isMobile?: boolean) => {
    const dispatch = useAppDispatch();
    const { list, active } = useAppSelector((state) => state.languages);
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

    const activeLangName = useMemo(() => {
        const { name } = list.find(({ id }) => id === active)!;
        return name;
    }, [list, active]);

    const setActive = useCallback(
        (id: number) => {
            dispatch(setActiveLang(id));
            toggleOpen(true);
        },
        [dispatch, toggleOpen]
    );

    useOutsideClickListener(currRef, isMobile ? undefined : () => toggleOpen(true));

    return {
        list,
        activeLangName,
        active,
        setActive,
        open,
        toggleOpen,
        currRef,
    };
};
