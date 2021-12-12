import { useIsMobile } from '../../context/useIsMobile';

export const useTopbar = () => {
    const isMobile = useIsMobile();

    return {
        isMobile,
    };
};