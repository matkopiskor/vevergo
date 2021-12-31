import { ApiService } from '.';

export const getCategoryAttributes = async (category: number) => {
    const url = `category/${category}/attributes`;
    return ApiService<any>('GET', url);
};
