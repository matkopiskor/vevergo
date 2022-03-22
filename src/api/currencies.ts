import { ApiService } from '.';

export const getCurrencies = async () => {
    return ApiService<any>({ method: 'GET', url: 'currencies' });
};
