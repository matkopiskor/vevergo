import { ApiService } from '.';

export const getPrivacy = async () => {
    return ApiService<any>('GET', `user/privacy`, null, null, undefined, true);
};

export const getPrivacyOnLogin = async (token: any) => {
    return ApiService<any>('GET', `user/privacy`, null, null, { iss_authentication_token: token });
};
