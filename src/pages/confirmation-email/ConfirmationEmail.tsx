import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImgConfirmationEmail } from '../../assets';
import { useIsMobile } from '../../context/useIsMobile';
import { useConfirmationEmail } from './useConfirmationEmail';

import './style.css';
import { Link } from 'react-router-dom';

const ConfirmationEmail: FC = () => {
    const { isEmailConfirmed } = useConfirmationEmail();
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    return (
        <div className="confirmation-email">
            {!isMobile && (
                <div className="confirmation-email__image">
                    <img src={ImgConfirmationEmail} alt="Confirm email img" />
                </div>
            )}
            <div className="confirmation-email__form">
                {isEmailConfirmed && <h4 className="confirmation-email__form-title">{t('lblConfirmationMessage')}</h4>}
                <div className="confirmation-email__form-actions">
                    <Link className="confirmation-email__form-confirmation-email" to="/login">
                        {t('lblLogin')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationEmail;
