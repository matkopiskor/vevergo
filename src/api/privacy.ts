import { ApiService } from '.';

export const getPrivacy = async () => {
    return ApiService<any>({ method: 'GET', url: `user/privacy`, excludeOrg: true });
};

export const getPrivacyOnLogin = async (token: any) => {
    return ApiService<any>({ method: 'GET', url: `user/privacy`, extraHeaders: { iss_authentication_token: token } });
};

export const updatePrivacy = async (data: any) => {
    return ApiService<any>({ method: 'PUT', url: 'user/privacy', data, excludeOrg: true });
};

export const updatePrivacyOrg = async (data: any) => {
    return ApiService<any>({ method: 'PUT', url: 'user/privacy', data });
};
