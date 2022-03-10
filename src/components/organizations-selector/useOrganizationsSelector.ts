import { useCallback, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActive as setActiveOrg } from '../../redux/reducers/organizationsReducer';
import { useAppHistory } from '../../utils/useAppHistory';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useOrganizationsSelector = (isMobile?: boolean) => {
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();

    const orgs = useAppSelector((state) => state.organizations);
    const { list = [], membership = [], active } = orgs ?? {};
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

    const activeOrgName = useMemo(() => {
        if (!active) {
            return undefined;
        }
        const org = [...list, ...membership].find(({ id }) => id === active);
        if (!org) {
            return undefined;
        }
        return org.name!;
    }, [active, list, membership]);

    const setActive = useCallback(
        (id: string) => {
            dispatch(setActiveOrg(id));
            toggleOpen(true);
            goTo('/', false, {});
        },
        [dispatch, goTo, toggleOpen]
    );

    useOutsideClickListener(currRef, isMobile ? undefined : () => toggleOpen(true));

    return {
        list: [...list.map(({ id, name }) => ({ id, name })), ...membership.map(({ id, name }) => ({ id, name }))],
        activeOrgName,
        active,
        setActive,
        open,
        toggleOpen,
        currRef,
    };
};
