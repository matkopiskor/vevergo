import { ApiService } from '.';

export const getSingleAd = async (adId: string, query: any, headers: any) => {
    const url = `view/item_listing/${adId}`;
    return ApiService<any>('GET', url, query, null, headers);
};
