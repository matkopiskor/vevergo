import { useAppSelector } from '../../redux/hooks';

export const useLanguageSelector = () => {
    const { list, active } = useAppSelector((state) => state.languages);
    return {
        list,
        active,
    };
};
