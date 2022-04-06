import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { registrationConfirmation } from '../../api/registrationConfirmation';

export const useConfirmationEmail = () => {
    const [isEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false);

    const [searchParams] = useSearchParams();

    const fetchData = useCallback(async (params: URLSearchParams) => {
        const data: any = {};

        params.forEach((value, key) => {
            if (key === 'email') {
                data[key] = value;
            }
            if (key === 'confirmation_id') {
                data[key] = value;
            }
        });

        const success = await registrationConfirmation(data);
        setIsEmailConfirmed(success);
    }, []);

    useEffect(() => {
        fetchData(searchParams);
    }, [fetchData, searchParams]);

    return {
        isEmailConfirmed,
    };
};
