import { useMemo } from 'react';
import { useIsMobile } from '../../context/useIsMobile';
import { useAppHistory } from '../../utils/useAppHistory';

export const useTopbar = () => {
    const isMobile = useIsMobile();
    const { path } = useAppHistory();

    const isHome = useMemo(() => isMobile && path === '/', [isMobile, path]);

    return {
        isMobile,
        isHome,
    };
};
