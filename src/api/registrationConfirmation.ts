import { ApiService } from '.';
import { ERROR_CODES } from '../constants/errorCodes';
import { notify } from '../services/notifications';

export const registrationConfirmation = async (data: { email: string; confirmation_id: string }) => {
    const resp = await ApiService<any>({ method: 'PUT', url: 'user/registration_confirmation', data });
    if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
        return false;
    }
    return true;
};
