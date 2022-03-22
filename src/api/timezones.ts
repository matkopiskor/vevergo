import { ApiService } from '.';

export const getTimezones = async () => {
    return ApiService<any>({ method: 'GET', url: 'timezones' });
};
