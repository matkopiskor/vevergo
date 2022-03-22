import { ApiService } from '.';

export const getCategoryTree = async () => {
    return ApiService<any>({ method: 'GET', url: 'category_tree' });
};
