import { useState, useRef, useCallback } from 'react';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useSettingsSelector = () => {
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
    useOutsideClickListener(currRef, () => toggleOpen(true));

    return {
        open,
        toggleOpen,
        currRef,
    };
};
