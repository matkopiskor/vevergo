import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { changeEmailConfirmation } from '../../api/changeEmailConfirmation';
import { useAppDispatch } from '../../redux/hooks';
import { addToLoading, removeFromLoading } from '../../redux/reducers/loadingReducer';

export const useChangeEmailConfirmation = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const [isEmailChangeConfirmed, setIsEmailChangeConfirmed] = useState<boolean>(false);

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

        const success = await changeEmailConfirmation(data);
        setIsEmailChangeConfirmed(success);
    }, []);

    useEffect(() => {
        fetchData(searchParams);
    }, [fetchData, searchParams]);

    useEffect(() => {
        if (isEmailChangeConfirmed) {
            dispatch(addToLoading());
            setTimeout(() => {
                dispatch(removeFromLoading());
                console.log('a');
                navigate('/login');
            }, 2000);
        }
    }, [dispatch, isEmailChangeConfirmed, navigate]);

    return {
        isEmailChangeConfirmed,
    };
};
