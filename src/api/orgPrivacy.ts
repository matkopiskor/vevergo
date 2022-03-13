import { ApiService } from '.';

export const getOrgPrivacy = async () => {
    return ApiService<any>('GET', `user/privacy`, null, null, undefined, false);
};
