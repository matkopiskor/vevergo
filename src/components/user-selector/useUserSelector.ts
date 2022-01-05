import { useCallback, useMemo, useRef, useState } from 'react';
import noUserImg from '../../assets/img/no-user.jpg';
import { useAppSelector } from '../../redux/hooks';
import { trans } from '../../utils/mocks';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useUserSelector = () => {
    const t = trans;
    const currRef = useRef(null);
    const [open, setOpen] = useState(false);
    const isLoggedIn = !!useAppSelector((state) => state.user.id);
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
    return {
        currRef,
        imgSrc,
        open,
        toggleOpen,
        isLoggedIn,
        t,
    };
};
