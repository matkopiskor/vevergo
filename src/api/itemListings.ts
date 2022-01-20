import { AxiosResponse } from 'axios';
import { ApiService } from '.';
import { IMainPageData } from '../dto/mainPageDto';
import { getAcceptLanguageHeaders } from './utils';

const getItemListings = async (currency: number, token: string): Promise<AxiosResponse<IMainPageData>> => {
    const headers = getAcceptLanguageHeaders(token);

    const url = 'item_listings';
    const method = 'GET';

    const params = {
        currency: currency.toString(),
        size: '1000',
    };

    return ApiService<IMainPageData>(method, url, params, null, headers);
};

export { getItemListings };
