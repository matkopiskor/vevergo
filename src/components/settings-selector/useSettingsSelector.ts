import { useState, useRef, useCallback } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useSettingsSelector = () => {
    const [open, setOpen] = useState(false);
    const currRef = useRef(null);
    const id = useAppSelector((state) => state.user.id);

    const isLoggedIn = !!id;
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
    useOutsideClickListener(currRef, () => toggleOpen(true));

    return {
        open,
        toggleOpen,
        currRef,
        isLoggedIn,
    };
};
