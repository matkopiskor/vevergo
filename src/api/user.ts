import { ApiService } from '.';
import { ERROR_CODES } from '../constants/errorCodes';
import { notify } from '../services/notifications';

export const getUser = async (id: number) => {
    return ApiService<any>({ method: 'GET', url: `view/user/${id}` });
};

export const updateUser = async (data: any) => {
    return ApiService<any>({ method: 'PUT', url: `user`, data, excludeOrg: true });
};

export const updateCurrentLanguage = async (id: number) => {
    return ApiService<any>({
        method: 'PATCH',
        url: 'user',
        data: { data_id: 'language', data_value: id },
        excludeOrg: true,
    });
};

export const deactivateUser = async () => {
    const resp = await ApiService<any>({ method: 'DELETE', url: 'user' });
    if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
        return false;
    } else {
        notify({ type: 'WARNING', description: 'lblAccountDeactivated' });
        return true;
    }
};
