import { ApiService } from '.';
import { ERROR_CODES } from '../constants/errorCodes';
import { notify } from '../services/notifications';

interface IRegisternParams {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2: string;
}

export const register = async (data: IRegisternParams) => {
    const resp = await ApiService<any>({ method: 'PUT', url: 'user/native_registration', data });
    if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
        return false;
    }
    return true;
};
