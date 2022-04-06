import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImgConfirmationEmail } from '../../assets';
import { useIsMobile } from '../../context/useIsMobile';
import { useChangeEmailConfirmation } from './useChangeEmailConfirmation';

import './style.css';

const ChangeEmailConfirmation: FC = () => {
    const { isEmailChangeConfirmed } = useChangeEmailConfirmation();
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    return (
        <div className="change-email-confirmation">
            {!isMobile && (
                <div className="change-email-confirmation__image">
                    <img src={ImgConfirmationEmail} alt="Confirm email img" />
                </div>
            )}
            <div className="change-email-confirmation__form">
                {isEmailChangeConfirmed && (
                    <h4 className="change-email-confirmation__form-title">{t('lblConfirmationMessage')}</h4>
                )}
            </div>
        </div>
    );
};

export default ChangeEmailConfirmation;
