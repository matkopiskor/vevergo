import { ApiService } from '.';

export const getCountries = async () => {
    return ApiService<any>({ method: 'GET', url: 'countries' });
};
