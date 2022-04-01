import { ApiService } from '.';

export const getUser = async (id: number) => {
    return ApiService<any>({ method: 'GET', url: `view/user/${id}` });
};

export const updateUser = async (data: any) => {
    return ApiService<any>({ method: 'PUT', url: `user`, data, excludeOrg: true });
};

export const updateCurrentLanguage = async (id: number) => {
    return ApiService<any>({
        method: 'PATCH',
        url: 'user',
        data: { data_id: 'language', data_value: id },
        excludeOrg: true,
    });
};

export const changeUserEmail = async (email: string) => {
    return ApiService<any>({
        method: 'POST',
        url: 'user/email',
        data: { email, confirmation_url: `${window.location.origin}/change-email` },
    });
};

export const changeUserPassowrd = async (data: any) => {
    return ApiService<any>({
        method: 'POST',
        url: 'user/password',
        data,
    });
};

export const deactivateUserRequest = async () => {
    return ApiService<any>({
        method: 'POST',
        url: 'user',
    });
};

export const uploadImage = async (data: any) => {
    const extraHeaders = {
        'Content-Type': 'image/jpeg',
    };
    return ApiService<any>({
        method: 'POST',
        url: 'user/image',
        data,
        extraHeaders,
        excludeOrg: true,
    });
};
