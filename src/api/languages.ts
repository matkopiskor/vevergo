import { ApiService } from '.';

export const getLanguages = async () => {
    return ApiService<any>('GET', 'languages');
};
