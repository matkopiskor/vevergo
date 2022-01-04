import { useCallback, useMemo } from 'react';
import { useIsMobile } from '../../context/useIsMobile';
import { useAppDispatch } from '../../redux/hooks';
import { toggleMobileOpen } from '../../redux/reducers/sidebarReducer';
import { useAppHistory } from '../../utils/useAppHistory';

export const useTopbar = () => {
    const dispatch = useAppDispatch();
    const isMobile = useIsMobile();
    const { path } = useAppHistory();

    const isHome = useMemo(() => path === '/', [path]);

    const onSidebarMenuClick = useCallback(() => {
        dispatch(toggleMobileOpen());
    }, [dispatch]);

    return {
        isMobile,
        isHome,
        onSidebarMenuClick,
    };
};
