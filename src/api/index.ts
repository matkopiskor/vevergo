import axios, { Method, AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';
import { addToLoading, removeFromLoading } from '../redux/reducers/loadingReducer';
import { store } from '../redux/store';
import { getOrgId, getUserToken } from '../utils/getParams';
import { API_KEY } from './constants';

const startLoading = () => store.dispatch(addToLoading());
const stopLoading = () => store.dispatch(removeFromLoading());

const applyHeaders = (extraHeaders?: Record<string, string>, excludeOrg?: boolean): Record<string, string> => {
    const headers: any = {};
    if (extraHeaders) {
        return { ...headers, ...extraHeaders };
    }
    const userToken = getUserToken();
    if (!!userToken) {
        headers['iss_authentication_token'] = userToken;
    }
    const orgId = getOrgId();
    if (!!orgId && !excludeOrg) {
        headers['iss_organization'] = orgId;
    }
    return headers;
};

const applyParams = (params?: any): Record<string, any> => {
    const p = {
        ...params,
        api_key: API_KEY,
    };

    return p;
};

const errorHandler = (errorResponse: AxiosError): AxiosResponse => {
    console.error(errorResponse);

    return errorResponse.response as AxiosResponse;
};
export const ApiService = async <T>(
    method: Method,
    url: string,
    inputParams?: any,
    data?: any,
    extraHeaders?: Record<string, string>,
    excludeOrg?: boolean
): Promise<AxiosResponse<T>> => {
    const headers = applyHeaders(extraHeaders, excludeOrg);
    const config: AxiosRequestConfig = {
        baseURL: 'https://api.vevergo.com:4443',
        timeout: 10000,
        headers,
    };
    const params = applyParams(inputParams);

    const encoded: string[] = [];
    for (let key of Object.keys(params)) {
        encoded.push(key + '=' + params[key]);
    }

    const fullUrl = encoded.length === 0 ? url : url + '?' + encoded.join('&');

    startLoading();

    const api: AxiosInstance = axios.create(config);

    return api
        .request<T>({
            method,
            url: fullUrl,
            data,
        })
        .then((response: AxiosResponse<T>) => response)
        .catch((error: AxiosError) => errorHandler(error))
        .finally(() => stopLoading());
};
