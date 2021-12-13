import { ApiService } from '.';

export const getCategoryTree = async () => {
    return ApiService<any>('GET', 'category_tree');
};
