import { Col, Row, Form, Checkbox } from 'antd';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../context/useIsMobile';
import './Security.css';

const { Item } = Form;

export const SecurityPrivacy: FC = () => {
    const [t] = useTranslation();
    const isMobile = useIsMobile();

    const gutter = useMemo<any>(() => {
        if (!isMobile) {
            return undefined;
        }
        return [0, 20];
    }, [isMobile]);

    return (
        <Row gutter={gutter}>
            <Col span={24}>
                <Item name="name_public" valuePropName="checked" className="no-gap">
                    <Checkbox>{t('lblShowNamePublic')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="address_public" valuePropName="checked" className="no-gap">
                    <Checkbox>{t('lblShowAddressOrProfile')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="phone_public" valuePropName="checked" className="no-gap">
                    <Checkbox>{t('lblMobilePhoneVisible')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="website_public" valuePropName="checked" className="no-gap">
                    <Checkbox>{t('lblWebsiteVisible')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="expired_items_notifications" valuePropName="checked" className="no-gap">
                    <Checkbox>{t('lblNotificationsExpiredItems')}</Checkbox>
                </Item>
            </Col>
            <Col span={24}>
                <Item name="contact_notifications" valuePropName="checked" className="no-gap">
                    <Checkbox>{t('lblNotificationsNewMessages')}</Checkbox>
                </Item>
            </Col>
        </Row>
    );
};
