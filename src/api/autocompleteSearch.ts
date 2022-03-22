import { AxiosResponse } from 'axios';
import { ApiService } from '.';
import { AutocompleteData } from '../dto/autocompleteDto';
import { getAcceptLanguageHeaders } from './utils';

const getAutocompleteData = async (search_text: string): Promise<AxiosResponse<AutocompleteData>> => {
    const extraHeaders = getAcceptLanguageHeaders();
    const include_categories = true;
    const search_inside = true;

    const inputParams = {
        include_categories,
        search_inside,
        search_text,
    };
    return ApiService<AutocompleteData>({ method: 'GET', url: 'view/autocomplete', inputParams, extraHeaders });
};

export { getAutocompleteData };
