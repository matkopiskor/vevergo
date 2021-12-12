import { useAppSelector } from '../../redux/hooks';

export const useCurrenciesSelector = () => {
    const { list, active } = useAppSelector((state) => state.currencies);
    return {
        list,
        active,
    };
};
