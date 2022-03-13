import { ApiService } from '.';

export const getCultureData = async () => {
    return ApiService<any>('GET', `user/culture_data`);
};

export const getCultureDataOnLogin = async (token: any) => {
    return ApiService<any>('GET', `user/culture_data`, null, null, { iss_authentication_token: token });
};
