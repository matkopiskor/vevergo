import { useEffect } from 'react';

export const useOutsideClickListener = (ref: any, handleClick?: any) => {
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (
                ref.current &&
                !ref.current.contains(e.target) &&
                e.target.tagName !== 'svg' &&
                e.target.tagName !== 'polyline'
            ) {
                console.log('a');
                handleClick && handleClick();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, handleClick]);
};
