import { useCallback, useRef, useState } from 'react';
import { useIsMobile } from '../../context/useIsMobile';
import { trans } from '../../utils/mocks';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useSortBy = () => {
    const t = trans;
    const isMobile = useIsMobile();
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
        [open],
    );

    const setActive = useCallback(
        (id: number) => {
            toggleOpen(true);
        },
        [toggleOpen],
    );

    useOutsideClickListener(currRef, isMobile ? undefined : () => toggleOpen(true));

    return {
        setActive,
        open,
        toggleOpen,
        currRef,
        t,
    };
};
