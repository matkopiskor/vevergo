import { useCallback } from 'react';
import { getCultureDataOnLogin } from '../../api/cultureData';
import { login } from '../../api/login';
import { getPrivacyOnLogin } from '../../api/privacy';
import { useAppDispatch } from '../../redux/hooks';
import { fetchOrgs } from '../../redux/reducers/organizationsReducer';
import { setData } from '../../redux/reducers/userReducer';
import { useAppHistory } from '../../utils/useAppHistory';

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();
    const onLogin = useCallback(
        async (values: any) => {
            const response = await login(values);
            const {
                data: { error_id, items },
                headers,
            } = response;
            if (error_id !== 0) {
                // TODO
            } else {
                const token = headers['iss_authentication_token'];
                const cultureDataResponse = await getCultureDataOnLogin(token);
                const privacyResponse = await getPrivacyOnLogin(token);
                const data: any = {
                    data: items[0],
                    token,
                };
                if (cultureDataResponse.data.items.length !== 0) {
                    data.cultureData = cultureDataResponse.data.items[0];
                }
                if (privacyResponse.data.items.length !== 0) {
                    data.privacy = privacyResponse.data.items[0];
                }

                dispatch(setData(data));
                dispatch(fetchOrgs());
                goTo('/', false, {});
            }
        },
        [dispatch, goTo]
    );
    return { onLogin };
};
