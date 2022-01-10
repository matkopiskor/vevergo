import { useCallback } from 'react';
import { login } from '../../api/login';
import { useAppDispatch } from '../../redux/hooks';
import { setData } from '../../redux/reducers/userReducer';

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const onLogin = useCallback(
        async (values: any) => {
            const response = await login(values);
            console.log(response);
            const {
                data: { error_id, items },
                headers,
            } = response;
            if (error_id !== 0) {
                // TODO
            } else {
                const token = headers['iss_authentication_token'];
                dispatch(setData({ data: items[0], token }));
            }
        },
        [dispatch],
    );
    return { onLogin };
};
