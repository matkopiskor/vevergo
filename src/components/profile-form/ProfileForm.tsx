import { Form, Tabs } from 'antd';
import { FC, useEffect, useState } from 'react';
import { List } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../page-title/PageTitle';
import { AccountData } from './AccountData';
import { PersonalData } from './PersonalData';

import './ProfileForm.css';
import { SecurityPrivacy } from './SecurityPrivacy';

const { TabPane } = Tabs;

interface IProps {
    user: any;
    privacyData: any;
}

export const ProfileForm: FC<IProps> = ({ user, privacyData }) => {
    const [t] = useTranslation();

    const [initVals, setInitValues] = useState<any>();

    useEffect(() => {
        let data: any = {};
        if (user.nickname) {
            data.nickname = user.nickname;
        }
        if (user.email) {
            data.email = user.email;
        }
        if (user.first_name) {
            data.first_name = user.first_name;
        }
        if (user.last_name) {
            data.last_name = user.last_name;
        }
        if (user.country) {
            data.country = user.country.toString();
        }
        if (user.language) {
            data.language = user.language.toString();
        }
        if (user.currency) {
            data.currency = user.currency.toString();
        }
        if (user.timezone) {
            data.timezone = user.timezone.toString();
        }
        if (user.user_type_name) {
            data.user_type_name = user.user_type_name;
        }
        if (user.user_status_name) {
            data.user_status_name = user.user_status_name;
        }
        if (user.address) {
            data.address = user.address;
        }
        if (user.address) {
            data.address = user.address;
        }
        if (user.address_2) {
            data.address_2 = user.address_2;
        }
        if (user.post_code) {
            data.post_code = user.post_code;
        }
        if (user.city) {
            data.city = user.city;
        }
        if (user.mobile_number) {
            data.mobile_number = user.mobile_number;
        }
        if (user.phone_number) {
            data.phone_number = user.phone_number;
        }
        if (user.fax_number) {
            data.fax_number = user.fax_number;
        }
        if (user.website) {
            data.website = user.website;
        }
        if (user.gender) {
            data.gender = user.gender.toString();
        }
        if (user.metric_system) {
            data.metric_system = '1';
        }
        data.namePublic = privacyData.name_public;
        data.address_public = privacyData.address_public;
        data.phone_public = privacyData.phone_public;
        data.website_public = privacyData.website_public;
        data.expired_items_notifications = privacyData.expired_items_notifications;
        data.contact_notifications = privacyData.contact_notifications;

        setInitValues(data);
    }, [user, privacyData]);
    if (!initVals) {
        return null;
    }
    return (
        <>
            <Form name="profile-form" initialValues={initVals}>
                <div className="profile-form-header">
                    <PageTitle title={t('lblUserProfile')} />
                    <button className="profile-form-more-button">
                        <List size={15} />
                    </button>
                </div>
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane key="1" tab={t('lblAccountData')}>
                        <AccountData />
                    </TabPane>
                    <TabPane key="2" tab={t('lblPersonalData')}>
                        <PersonalData />
                    </TabPane>
                    <TabPane key="3" tab={t('lblSecurityPrivacy')}>
                        <SecurityPrivacy />
                    </TabPane>
                </Tabs>
            </Form>
        </>
    );
};
