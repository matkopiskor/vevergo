import { ApiService } from '.';

export const getItemMedia = async (itemId: string) => {
    return ApiService<any>('GET', `/view/item_listing/${itemId}/media`);
};
