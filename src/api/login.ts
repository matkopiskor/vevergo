import { ApiService } from '.';
import { ERROR_CODES } from '../constants/errorCodes';
import { notify } from '../services/notifications';

interface ILoginParams {
    email: string;
    password: string;
}

export const login = async (params: ILoginParams) => {
    const extraHeaders = {
        iss_email: params.email,
        iss_password: params.password,
    };

    return ApiService<any>({ method: 'GET', url: 'user/login', extraHeaders });
};

export const reactivateAccount = async (params: ILoginParams) => {
    const extraHeaders = {
        iss_email: params.email,
        iss_password: params.password,
    };

    const resp = await ApiService<any>({ method: 'GET', url: 'user/reactivate', extraHeaders });
    if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
    } else {
        notify({ type: 'WARNING', description: 'lblAccountReactivated' });
    }
};

export const resetPassword = async (data: { email: string; confirmation_url: string }) => {
    const resp = await ApiService<any>({ method: 'POST', url: 'user/password_reset', data });
    if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
    } else {
        notify({ type: 'WARNING', description: 'lblPasswordResetMessage' });
    }
};
