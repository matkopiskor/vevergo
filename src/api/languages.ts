import { ApiService } from '.';

export const getLanguages = async () => {
    return ApiService<any>({ method: 'GET', url: 'languages' });
};
