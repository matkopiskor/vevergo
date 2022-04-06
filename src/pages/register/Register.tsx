import { FC } from 'react';
import { Button, Form } from 'antd';
import { useRegister } from './useRegister';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../context/useIsMobile';
import { ImgRegister } from '../../assets';
import { Input } from '../../components/input';

import './style.css';

const { Item } = Form;

const Register: FC = () => {
    const { onRegister, registrationSuccessful, formTitle, formSubtitle, onFormChange, registerDisabled } =
        useRegister();
    const { t } = useTranslation();
    const isMobile = useIsMobile();

    return (
        <div className="register">
            {!isMobile && (
                <div className="register__image">
                    <img src={ImgRegister} alt="Register img" />
                </div>
            )}
            <div className="register__form">
                <h4 className="register__form-title">{t(formTitle)}</h4>
                <p className="register__form-description">{t(formSubtitle)}</p>
                {!registrationSuccessful && (
                    <Form name="register-form" onFinish={onRegister} onValuesChange={onFormChange}>
                        <Item name="nickname" rules={[{ required: true, message: t('lblRequired') }]}>
                            <Input
                                type="text"
                                placeholder={t('lblUsername')}
                                label={t('lblUsername')}
                                labelClassName="register__form-input-label"
                                inputClassName="register__form-input"
                            />
                        </Item>
                        <Item name="first_name" rules={[{ required: true, message: t('lblRequired') }]}>
                            <Input
                                type="text"
                                placeholder={t('lblFirstName')}
                                label={t('lblFirstName')}
                                labelClassName="register__form-input-label"
                                inputClassName="register__form-input"
                            />
                        </Item>
                        <Item name="last_name" rules={[{ required: true, message: t('lblRequired') }]}>
                            <Input
                                type="text"
                                placeholder={t('lblLastName')}
                                label={t('lblLastName')}
                                labelClassName="register__form-input-label"
                                inputClassName="register__form-input"
                            />
                        </Item>
                        <Item name="email" rules={[{ required: true, message: t('lblRequired') }]}>
                            <Input
                                type="email"
                                placeholder={t('lblEmail')}
                                label={t('lblEmail')}
                                labelClassName="register__form-input-label"
                                inputClassName="register__form-input"
                            />
                        </Item>
                        <Item name="password" rules={[{ required: true, message: t('lblRequired') }]}>
                            <Input
                                type="password"
                                placeholder={t('lblPassword')}
                                label={t('lblPassword')}
                                labelClassName="register__form-input-label"
                                inputClassName="register__form-input"
                            />
                        </Item>
                        <Item name="password2" rules={[{ required: true, message: t('lblRequired') }]}>
                            <Input
                                type="password"
                                placeholder={t('lblRetypePassword')}
                                label={t('lblRetypePassword')}
                                labelClassName="register__form-input-label"
                                inputClassName="register__form-input"
                            />
                        </Item>
                        <div className="register__form-actions">
                            <Button className="register__form-register" disabled={registerDisabled} htmlType="submit">
                                {t('lblRegister')}
                            </Button>
                        </div>
                    </Form>
                )}
            </div>
        </div>
    );
};

export default Register;
