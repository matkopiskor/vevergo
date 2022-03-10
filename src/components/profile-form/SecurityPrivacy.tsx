import { Col, Row, Form, Checkbox } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const { Item } = Form;

export const SecurityPrivacy: FC = () => {
    const [t] = useTranslation();

    return (
        <Row>
            <Col span={24}>
                <Item name="name_public" valuePropName="checked">
                    <Checkbox>{t('lblShowNamePublic')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="address_public" valuePropName="checked">
                    <Checkbox>{t('lblShowAddressOrProfile')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="phone_public" valuePropName="checked">
                    <Checkbox>{t('lblMobilePhoneVisible')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="website_public" valuePropName="checked">
                    <Checkbox>{t('lblWebsiteVisible')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="expired_items_notifications" valuePropName="checked">
                    <Checkbox>{t('lblNotificationsExpiredItems')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="contact_notifications" valuePropName="checked">
                    <Checkbox>{t('lblNotificationsNewMessages')}</Checkbox>
                </Item>
            </Col>
        </Row>
    );
};
