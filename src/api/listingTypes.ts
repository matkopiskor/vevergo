import { ApiService } from '.';

export const getListingTypes = async () => {
    return ApiService<any>({ method: 'GET', url: 'listing_types' });
};
