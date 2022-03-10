import { ApiService } from '.';

export const getPrivacy = async () => {
    return ApiService<any>('GET', `user/privacy`);
};
