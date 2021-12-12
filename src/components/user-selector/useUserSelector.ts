import { useCallback, useMemo, useRef, useState } from 'react';
import noUserImg from '../../assets/img/no-user.jpg';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

export const useUserSelector = () => {
    const currRef = useRef(null);
    const [open, setOpen] = useState(false);
    const toggleOpen = useCallback(
        (forceClose?: boolean) => {
            console.log(forceClose);
            if (forceClose) {
                setOpen(false);
                return;
            }
            setOpen(!open);
        },
        [open]
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
    };
};
