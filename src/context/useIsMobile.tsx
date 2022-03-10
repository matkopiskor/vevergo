import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { MATCH_MEDIA } from '../constants/matchMedia';

const mql = window.matchMedia(MATCH_MEDIA);

interface IIsMobileContext {
    isMobile: boolean;
}

const IsMobileContext = createContext<IIsMobileContext>({} as IIsMobileContext);

export const IsMobileProvider: FC = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(mql.matches);

    const mediaQueryChanged = useCallback(() => {
        setIsMobile(mql.matches);
    }, []);

    useEffect(() => {
        mql.addEventListener('change', mediaQueryChanged);

        return () => {
            mql.removeEventListener('change', mediaQueryChanged);
        };
    }, [mediaQueryChanged]);

    const value = useMemo(() => ({ isMobile }), [isMobile]);

    return <IsMobileContext.Provider value={value}>{children}</IsMobileContext.Provider>;
};

export const useIsMobile = () => {
    const { isMobile } = useContext(IsMobileContext);

    return isMobile;
};
