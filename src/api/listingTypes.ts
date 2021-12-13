import { ApiService } from '.';

export const getListingTypes = async () => {
    return ApiService<any>('GET', 'listing_types');
};
