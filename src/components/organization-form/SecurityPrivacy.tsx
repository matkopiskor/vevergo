import { Col, Row, Form, Checkbox } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Security.css';

const { Item } = Form;

interface IProps {
    hasRights: boolean;
}

export const SecurityPrivacy: FC<IProps> = ({ hasRights }) => {
    const [t] = useTranslation();

    return (
        <>
            <Row>
                <Col span={24}>
                    <Item name="name_public" valuePropName="checked" className="no-gap">
                        <Checkbox disabled={!hasRights}>{t('lblShowOrganizationNamePublic')}</Checkbox>
                    </Item>
                </Col>
                <Col span={24}>
                    <Item name="address_public" valuePropName="checked" className="no-gap">
                        <Checkbox disabled={!hasRights}>{t('lblShowCompanyAddress')}</Checkbox>
                    </Item>
                </Col>
                <Col span={24}>
                    <Item name="phone_public" valuePropName="checked" className="no-gap">
                        <Checkbox disabled={!hasRights}>{t('lblMobilePhoneVisible')}</Checkbox>
                    </Item>
                </Col>
                <Col span={24}>
                    <Item name="website_public" valuePropName="checked" className="no-gap">
                        <Checkbox disabled={!hasRights}>{t('lblWebsiteVisible')}</Checkbox>
                    </Item>
                </Col>
                <Col span={24}>
                    <Item name="expired_items_notifications" valuePropName="checked" className="no-gap">
                        <Checkbox disabled={!hasRights}>{t('lblNotificationsExpiredItems')}</Checkbox>
                    </Item>
                </Col>
                <Col span={24}>
                    <Item name="contact_notifications" valuePropName="checked" className="no-gap">
                        <Checkbox disabled={!hasRights}>{t('lblNotificationsNewMessages')}</Checkbox>
                    </Item>
                </Col>
            </Row>
            {hasRights && (
                <button type="submit" className="organization-save-button">
                    {t('lblSave')}
                </button>
            )}
        </>
    );
};
