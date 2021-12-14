import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setOpen, toggleDocked } from '../../redux/reducers/sidebarReducer';

export const useSidebar = () => {
    const dispatch = useAppDispatch();
    const sidebarState = useAppSelector((state) => state.sidebar);

    const docked = useMemo(() => {
        return sidebarState?.docked;
    }, [sidebarState?.docked]);

    const open = useMemo(() => {
        return sidebarState?.open;
    }, [sidebarState?.open]);

    const onDockedClick = useCallback(() => {
        dispatch(toggleDocked());
    }, [dispatch]);

    const onSidebarMouseEnter = useCallback(() => {
        dispatch(setOpen(true));
    }, [dispatch]);

    const onSidegbarMouseLeave = useCallback(() => {
        dispatch(setOpen(false));
    }, [dispatch]);
    return {
        docked,
        open,
        onDockedClick,
        onSidebarMouseEnter,
        onSidegbarMouseLeave,
    };
};
