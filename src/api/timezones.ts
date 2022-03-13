import { ApiService } from '.';

export const getTimezones = async () => {
    return ApiService<any>('GET', 'timezones');
};
