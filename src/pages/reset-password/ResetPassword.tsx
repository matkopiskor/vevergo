import { Button, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { ImgResetPassword } from '../../assets';
import { Input } from '../../components/input';
import { useIsMobile } from '../../context/useIsMobile';
import { useResetPassword } from './useResetPassword';

import './style.css';

const { Item } = Form;

const ResetPassword = () => {
    const { resetPasswordDisabled, onChangePassword, onFormChange } = useResetPassword();
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    return (
        <div className="change-password">
            {!isMobile && (
                <div className="change-password__image">
                    <img src={ImgResetPassword} alt="Confirm email img" />
                </div>
            )}
            <div className="change-password__form">
                <Form name="change-password-form" onFinish={onChangePassword} onValuesChange={onFormChange}>
                    <Item name="password" rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type="password"
                            placeholder={t('lblPassword')}
                            label={t('lblPassword')}
                            labelClassName="change-password__form-input-label"
                            inputClassName="change-password__form-input"
                        />
                    </Item>
                    <Item name="password2" rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type="password"
                            placeholder={t('lblRetypePassword')}
                            label={t('lblRetypePassword')}
                            labelClassName="change-password__form-input-label"
                            inputClassName="change-password__form-input"
                        />
                    </Item>
                    <div className="change-password__form-actions">
                        <Button
                            className="change-password__form-change-password"
                            disabled={resetPasswordDisabled}
                            htmlType="submit"
                        >
                            {t('lblResetPassword')}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;
