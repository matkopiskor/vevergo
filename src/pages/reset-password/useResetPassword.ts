import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../api/changePassword';

export const useResetPassword = () => {
    const navigate = useNavigate();
    const [resetPasswordDisabled, setResetPasswordDisabled] = useState<boolean>(true);

    const onFormChange = useCallback((_, values: any) => {
        const { password, password2 } = values;
        if (!password || !password2) {
            setResetPasswordDisabled(true);
            return;
        }
        return setResetPasswordDisabled(password !== password2);
    }, []);

    const onChangePassword = useCallback(
        async (values) => {
            const successful = await changePassword(values);
            if (successful) {
                navigate('/login');
            }
        },
        [navigate]
    );

    return { resetPasswordDisabled, onChangePassword, onFormChange };
};
