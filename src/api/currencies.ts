import { ApiService } from '.';

export const getCurrencies = async () => {
    return ApiService<any>('GET', 'currencies');
};
