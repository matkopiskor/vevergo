import { ApiService } from '.';

export const getUser = async (id: number) => {
    return ApiService<any>({ method: 'GET', url: `view/user/${id}` });
};

export const updateUser = async (data: any) => {
    return ApiService<any>({ method: 'PUT', url: `user`, data, excludeOrg: true });
};
