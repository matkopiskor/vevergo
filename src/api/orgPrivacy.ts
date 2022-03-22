import { ApiService } from '.';

export const getOrgPrivacy = async () => {
    return ApiService<any>({ method: 'GET', url: `user/privacy`, excludeOrg: false });
};
