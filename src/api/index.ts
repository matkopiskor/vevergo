import axios, { Method, AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';
import { addToLoading, removeFromLoading } from '../redux/reducers/loadingReducer';
import { store } from '../redux/store';
import { notify } from '../services/notifications';
import { getOrgId, getUserToken } from '../utils/getParams';
import { API_KEY } from './constants';

const startLoading = () => store.dispatch(addToLoading());
const stopLoading = () => store.dispatch(removeFromLoading());

const applyHeaders = (extraHeaders?: Record<string, string>, excludeOrg?: boolean): Record<string, string> => {
    const headers: any = {};
    const userToken = getUserToken();
    if (!!userToken) {
        headers['iss_authentication_token'] = userToken;
    }
    const orgId = getOrgId();
    if (!!orgId && !excludeOrg) {
        headers['iss_organization'] = orgId;
    }
    if (extraHeaders) {
        return { ...headers, ...extraHeaders };
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

const errorHandler = (errorResponse: AxiosError, errorDescription?: string): AxiosResponse => {
    console.error(errorResponse);

    if (errorDescription) {
        notify({ type: 'ERROR', description: errorDescription });
    }

    return errorResponse.response as AxiosResponse;
};

interface IParams {
    method: Method;
    url: string;
    inputParams?: any;
    data?: any;
    extraHeaders?: Record<string, string>;
    excludeOrg?: boolean;
    successDescription?: string;
    errorDescription?: string;
    warningDescription?: string;
    showNotifByErrorCode?: boolean;
}

export const ApiService = async <T>({
    method,
    url,
    inputParams,
    data,
    extraHeaders,
    excludeOrg,
    successDescription,
    errorDescription,
    warningDescription,
}: IParams): Promise<AxiosResponse<T>> => {
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
        .then((response: AxiosResponse<T>) => {
            if (successDescription) {
                notify({ type: 'SUCCESS', description: successDescription });
            }
            return response;
        })
        .catch((error: AxiosError) => errorHandler(error, errorDescription))
        .finally(() => {
            if (warningDescription) {
                notify({ type: 'WARNING', description: warningDescription });
            }
            stopLoading();
        });
};
