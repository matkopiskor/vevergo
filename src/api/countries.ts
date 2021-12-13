import { ApiService } from '.';

export const getCountries = async () => {
    return ApiService<any>('GET', 'countries');
};
