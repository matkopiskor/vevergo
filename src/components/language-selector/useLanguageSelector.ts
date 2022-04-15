import { useCallback, useMemo, useRef, useState } from 'react';
import { getUser, updateCurrentLanguage } from '../../api/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { initRefresh, refresh, setActive as setActiveLang } from '../../redux/reducers/langugagesReducer';
import { updateData } from '../../redux/reducers/userReducer';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useLanguageSelector = (isMobile?: boolean) => {
    const dispatch = useAppDispatch();
    const { list, active } = useAppSelector((state) => state.languages);
    const [open, setOpen] = useState(false);
    const userId = useAppSelector((state) => state.user.id);
    const isLoggedIn = useMemo(() => !!userId, [userId]);
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

    const updateUser = useCallback(
        async (id: number) => {
            dispatch(initRefresh());
            await updateCurrentLanguage(id);
            const user = await getUser(userId!.toString());
            dispatch(updateData(user?.data?.items?.[0] ?? {}));
            dispatch(refresh());
        },
        [dispatch, userId]
    );

    const setActive = useCallback(
        async (id: number) => {
            dispatch(setActiveLang(id));
            isLoggedIn && (await updateUser(id));
            toggleOpen(true);
        },
        [dispatch, isLoggedIn, toggleOpen, updateUser]
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
