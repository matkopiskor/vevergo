import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useAppHistory = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goTo = useCallback(
        (path: string, replace?: boolean, newState?: any) => {
            const state =
                Object.keys(newState).length === 0
                    ? null
                    : {
                          ...location.state,
                          ...newState,
                      };
            const obj: any = {};
            obj['replace'] = !!replace;
            obj['state'] = state;
            navigate(path, obj);
        },
        [location.state, navigate]
    );

    const state = useMemo(() => {
        return location.state;
    }, [location.state]);

    const path = useMemo(() => {
        return location.pathname;
    }, [location.pathname]);

    return {
        goTo,
        state,
        path,
    };
};
