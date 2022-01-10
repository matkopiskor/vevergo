import { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import noUserImg from '../../assets/img/no-user.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearData } from '../../redux/reducers/userReducer';
import { useAppHistory } from '../../utils/useAppHistory';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useUserSelector = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();
    const currRef = useRef(null);
    const [open, setOpen] = useState(false);
    const id = !!useAppSelector((state) => state.user.id);
    const isLoggedIn = useMemo(() => !!id, [id]);
    const toggleOpen = useCallback(
        (forceClose?: boolean) => {
            if (forceClose) {
                setOpen(false);
                return;
            }
            setOpen(!open);
        },
        [open],
    );

    useOutsideClickListener(currRef, () => toggleOpen(true));

    const imgSrc = useMemo(() => {
        return noUserImg;
    }, []);

    const logout = useCallback(() => {
        dispatch(clearData());
        goTo('/', false, {});
    }, [dispatch, goTo]);

    return {
        currRef,
        imgSrc,
        open,
        toggleOpen,
        isLoggedIn,
        t,
        logout,
    };
};
