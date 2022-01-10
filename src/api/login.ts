import { ApiService } from '.';

interface ILoginParams {
    email: string;
    password: string;
}

export const login = async (params: ILoginParams) => {
    const headers = {
        iss_email: params.email,
        iss_password: params.password,
    };

    return ApiService<any>('GET', 'user/login', null, null, headers);
};
