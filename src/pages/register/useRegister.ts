import { useCallback, useState } from 'react';
import { register } from '../../api/register';

export const useRegister = () => {
    const onRegister = useCallback(async (values) => {
        const successful = await register(values);
        setRegistrationSuccessful(successful);
    }, []);
    const [registrationSuccessful, setRegistrationSuccessful] = useState<boolean>(false);
    const [registerDisabled, setRegisterDisabled] = useState<boolean>(true);

    const formTitle = registrationSuccessful ? 'lblRegistrationSuccessful' : 'lblCreateAccount';
    const formSubtitle = registrationSuccessful ? 'lblRegistrationSuccessfulMessage' : 'lblCreateAccountDescription';

    const onFormChange = useCallback((_, values: any) => {
        const { password, password2 } = values;
        if (!password || !password2) {
            setRegisterDisabled(true);
            return;
        }
        return setRegisterDisabled(password !== password2);
    }, []);

    return {
        onRegister,
        registrationSuccessful,
        formTitle,
        formSubtitle,
        onFormChange,
        registerDisabled,
    };
};
