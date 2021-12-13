import { AxiosResponse } from 'axios';
import { ApiService } from '.';
import { IMainPageData } from '../dto/mainPageDto';
import { getAcceptLanguageHeaders } from './utils';

const getMainPageItems = async (start?: number): Promise<AxiosResponse<IMainPageData>> => {
    const headers = getAcceptLanguageHeaders();
    const urlRecent = 'view/recent_item_listings';
    // const url = 'view/search_item_listings';

    const inputParams: any = {};

    if (start) {
        inputParams['start'] = start;
    }

    return ApiService<IMainPageData>('GET', urlRecent, inputParams, null, headers);
};

export { getMainPageItems };
