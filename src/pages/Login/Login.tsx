import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogin } from './useLogin';
import loginImg from '../../assets/img/login.png';
import './Login.css';

const Login: FC = () => {
    const {} = useLogin();
    const { t } = useTranslation();
    return (
        <div className='login'>
            <div className='login__image'>
                <img src={loginImg} alt='Login img' />
            </div>
            <div className='login__form'>
                <h4 className='login__form-title'>{t('lblLogin')}</h4>
                <p className='login__form-description'>{t('lblLoginDescription')}</p>
            </div>
        </div>
    );
};

export default Login;
