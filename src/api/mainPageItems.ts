import { AxiosResponse } from 'axios';
import { ApiService } from '.';
import { sortByOptions } from '../constants/sortByOptions';
import { IMainPageData } from '../dto/mainPageDto';
import { getAcceptLanguageHeaders } from './utils';

interface Params {
    start?: number;
    sortBy?: number;
    searchText?: string;
}

const getMainPageItems = async (params?: Params): Promise<AxiosResponse<IMainPageData>> => {
    const { start, sortBy, searchText } = params ?? {};
    const headers = getAcceptLanguageHeaders();

    const inputParams: any = {};

    if (start) {
        inputParams['start'] = start;
    }

    if (sortBy) {
        const { orderType, orderItem } = sortByOptions.find(({ value }) => value === sortBy)!;
        inputParams['orderType'] = orderType;
        inputParams['orderItem'] = orderItem;
    }

    if (searchText) {
        inputParams['search_text'] = searchText;
    }

    const url = Object.keys(inputParams).length === 0 ? 'view/recent_item_listings' : 'view/search_item_listings';
    const method = Object.keys(inputParams).length === 0 ? 'GET' : 'POST';

    return ApiService<IMainPageData>(method, url, inputParams, null, headers);
};

export { getMainPageItems };
