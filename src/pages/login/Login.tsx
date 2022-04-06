import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogin } from './useLogin';
import './Login.css';
import { Button, Form } from 'antd';
import { Input } from '../../components/input';
import { Mail, Lock } from 'react-feather';
import { ImgLogin } from '../../assets';
import { useIsMobile } from '../../context/useIsMobile';
import { Link } from 'react-router-dom';

const { Item } = Form;

const Login: FC = () => {
    const { onLogin } = useLogin();
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    return (
        <div className="login">
            {!isMobile && (
                <div className="login__image">
                    <img src={ImgLogin} alt="Login img" />
                </div>
            )}
            <div className="login__form">
                <h4 className="login__form-title">{t('lblLogin')}</h4>
                <p className="login__form-description">{t('lblLoginDescription')}</p>
                <Form name="login-form" onFinish={onLogin}>
                    <Item name="email">
                        <Input
                            type="email"
                            placeholder={t('lblEmail')}
                            label={t('lblEmail')}
                            labelClassName="login__form-input-label"
                            inputClassName="login__form-input"
                            Prefix={<Mail size={16} className="login__form-input-icon" />}
                        />
                    </Item>
                    <Item name="password">
                        <Input
                            type="password"
                            placeholder={t('lblPassword')}
                            label={t('lblPassword')}
                            labelClassName="login__form-input-label"
                            inputClassName="login__form-input"
                            Prefix={<Lock size={16} className="login__form-input-icon" />}
                        />
                    </Item>
                    <div className="login__form-actions">
                        <span className="login__form-modal-action">{t('lblReactivateQuestion')}</span>
                        <a href="/register" className="login__form-modal-action">
                            {t('lblForgotPassword')}
                        </a>
                    </div>
                    <div className="login__form-actions login__form-actions-buttons">
                        <Link className="login__form-register" to="/register">
                            {t('lblRegister')}
                        </Link>
                        <Button className="login__form-login" htmlType="submit">
                            {t('lblLogin')}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
