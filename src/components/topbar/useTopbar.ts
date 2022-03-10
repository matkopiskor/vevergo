import { useCallback, useMemo } from 'react';
import { useIsMobile } from '../../context/useIsMobile';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleMobileOpen } from '../../redux/reducers/sidebarReducer';
import { useAppHistory } from '../../utils/useAppHistory';

export const useTopbar = () => {
    const dispatch = useAppDispatch();
    const isMobile = useIsMobile();
    const { path } = useAppHistory();

    const id = useAppSelector((state) => state.user.id);

    const isLoggedIn = !!id;

    const isHome = useMemo(() => path === '/', [path]);

    const onSidebarMenuClick = useCallback(() => {
        dispatch(toggleMobileOpen());
    }, [dispatch]);

    return {
        isMobile,
        isHome,
        onSidebarMenuClick,
        isLoggedIn,
    };
};
