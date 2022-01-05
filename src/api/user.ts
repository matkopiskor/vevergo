import { ApiService } from '.';

export const getUser = async (id: number) => {
    return ApiService<any>('GET', `view/user/${id}`);
};
