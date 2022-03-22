import { AxiosResponse } from 'axios';
import { ApiService } from '.';
import { IMainPageData } from '../dto/mainPageDto';
import { getAcceptLanguageHeaders } from './utils';

const getItemListings = async (currency: number, token: string): Promise<AxiosResponse<IMainPageData>> => {
    const extraHeaders = getAcceptLanguageHeaders(token);

    const url = 'item_listings';
    const method = 'GET';

    const inputParams = {
        currency: currency.toString(),
        size: '1000',
    };

    return ApiService<IMainPageData>({ method, url, inputParams, extraHeaders });
};

export { getItemListings };
