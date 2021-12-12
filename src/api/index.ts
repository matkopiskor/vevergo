import axios, { Method, AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';
import { addToLoading, removeFromLoading } from '../redux/reducers/loadingReducer';
import { store } from '../redux/store';
import { API_KEY } from './constants';

const startLoading = () => store.dispatch(addToLoading());
const stopLoading = () => store.dispatch(removeFromLoading());

const applyHeaders = (extraHeaders?: Record<string, string>): Record<string, string> => {
    const headers = {};
    return headers;
};

const applyParams = (params?: any): Record<string, any> => ({
    ...params,
    api_key: API_KEY,
})

const errorHandler = (errorResponse: AxiosError): AxiosResponse => {
    console.error(errorResponse);

    return errorResponse.response as AxiosResponse;
}

export const ApiService = async <T>(method: Method, url: string, inputParams?: any, data?: any, extraHeaders?: Record<string, string>): Promise<AxiosResponse<T>> => {
    const headers = applyHeaders(extraHeaders);
    const config: AxiosRequestConfig = {
        baseURL: 'https://api.vevergo.com:4443',
        timeout: 10000,
        headers,
    };
    const params = applyParams(inputParams);

    startLoading();

    const api: AxiosInstance = axios.create(config);

    return api.request<T>({
        method,
        url,
        params,
        data,
    })
    .then((response: AxiosResponse<T>) => response)
    .catch((error: AxiosError) => errorHandler(error))
    .finally(() => stopLoading());
}