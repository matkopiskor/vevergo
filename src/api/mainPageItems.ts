import { AxiosResponse } from 'axios';
import { ApiService } from '.';
import { IMainPageData } from '../dto/mainPageDto';
import { getAcceptLanguageHeaders } from './utils';

const getMainPageItems = async (): Promise<AxiosResponse<IMainPageData>> => {
    const headers = getAcceptLanguageHeaders();
    const urlRecent = 'view/recent_item_listings';
    // const url = 'view/search_item_listings';

    return ApiService<IMainPageData>('GET', urlRecent, null, null, headers);
};

export { getMainPageItems };