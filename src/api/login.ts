import { ApiService } from '.';

interface ILoginParams {
    email: string;
    password: string;
}

export const login = async (params: ILoginParams) => {
    const extraHeaders = {
        iss_email: params.email,
        iss_password: params.password,
    };

    return ApiService<any>({ method: 'GET', url: 'user/login', extraHeaders });
};
