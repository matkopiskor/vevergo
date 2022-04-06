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
import { Modal } from '../../components/modal';

const { Item } = Form;

const Login: FC = () => {
    const {
        onLogin,
        openModalReactivateAccount,
        closeModalReactivateAccount,
        modalReactivateAccount,
        onReactivateAccount,
        openModalResetPassword,
        closeModalResetPassword,
        modalResetPassword,
        onPasswordReset,
    } = useLogin();
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    return (
        <>
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
                            <span className="login__form-modal-action" onClick={openModalReactivateAccount}>
                                {t('lblReactivateQuestion')}
                            </span>
                            <span className="login__form-modal-action" onClick={openModalResetPassword}>
                                {t('lblForgotPassword')}
                            </span>
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
            <Modal
                title={t('lblReactivateAccount')}
                visible={modalReactivateAccount}
                cancelProps={{
                    handleCancel: () => {
                        closeModalReactivateAccount();
                    },
                    showAsButton: false,
                }}
                destroyOnClose
            >
                <Form name="reactivate-account" onFinish={onReactivateAccount}>
                    <Item name="email" rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type="email"
                            placeholder={t('lblEmail')}
                            label={t('lblEmail')}
                            labelClassName="login__form-input-label"
                            inputClassName="login__form-input"
                            Prefix={<Mail size={16} className="login__form-input-icon" />}
                        />
                    </Item>
                    <Item name="password" rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type="password"
                            placeholder={t('lblPassword')}
                            label={t('lblPassword')}
                            labelClassName="login__form-input-label"
                            inputClassName="login__form-input"
                            Prefix={<Lock size={16} className="login__form-input-icon" />}
                        />
                    </Item>
                    <Button className="login__form-login" htmlType="submit">
                        {t('lblSend')}
                    </Button>
                </Form>
            </Modal>
            <Modal
                title={t('lblResetPassword')}
                visible={modalResetPassword}
                cancelProps={{
                    handleCancel: () => {
                        closeModalResetPassword();
                    },
                    showAsButton: false,
                }}
                destroyOnClose
            >
                <Form name="reset-password" onFinish={onPasswordReset}>
                    <Item name="email" rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type="email"
                            placeholder={t('lblEmail')}
                            label={t('lblEmail')}
                            labelClassName="login__form-input-label"
                            inputClassName="login__form-input"
                            Prefix={<Mail size={16} className="login__form-input-icon" />}
                        />
                    </Item>
                    <Button className="login__form-login" htmlType="submit">
                        {t('lblSend')}
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default Login;
