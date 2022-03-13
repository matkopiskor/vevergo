import { ApiService } from '.';

export const getUser = async (id: number) => {
    return ApiService<any>('GET', `view/user/${id}`);
};

export const updateUser = async (data: any) => {
    return ApiService<any>('PUT', `user`, null, data, undefined, true);
};
