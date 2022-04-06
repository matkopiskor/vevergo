import { ApiService } from '.';
import { ERROR_CODES } from '../constants/errorCodes';
import { notify } from '../services/notifications';

export const changeEmailRequest = async (data: { email: string }) => {
    const resp = await ApiService<any>({ method: 'PUT', url: 'user/email', data });
    if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
        return false;
    } else {
        notify({ type: 'WARNING', description: 'lblEmailChangeRequestMessage' });
        return true;
    }
};
