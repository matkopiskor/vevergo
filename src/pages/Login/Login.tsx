import { FC } from 'react';
import { useLogin } from './useLogin';
import loginImg from '../../assets/img/login.png';
import './Login.css';
import { trans } from '../../utils/mocks';

const Login: FC = () => {
    const {} = useLogin();
    const t = trans;
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
