import { ApiService } from '.';

export const getCultureData = async () => {
    return ApiService<any>({ method: 'GET', url: `user/culture_data` });
};

export const getCultureDataOnLogin = async (token: any) => {
    return ApiService<any>({
        method: 'GET',
        url: `user/culture_data`,
        extraHeaders: { iss_authentication_token: token },
    });
};
