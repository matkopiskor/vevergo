import { ApiService } from '.';

export const getSingleAd = async (adId: string, inputParams: any, extraHeaders: any) => {
    const url = `view/item_listing/${adId}`;
    return ApiService<any>({ method: 'GET', url, inputParams, extraHeaders });
};
