import { ApiService } from '.';

export const getCultureData = async () => {
    return ApiService<any>('GET', `user/culture_data`);
};
