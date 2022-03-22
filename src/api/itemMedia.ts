import { ApiService } from '.';

export const getItemMedia = async (itemId: string) => {
    return ApiService<any>({ method: 'GET', url: `/view/item_listing/${itemId}/media` });
};
