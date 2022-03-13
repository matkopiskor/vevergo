import { Form, Tabs } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { List } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { updatePrivacy } from '../../api/privacy';
import { updateUser } from '../../api/user';
import { useAppDispatch } from '../../redux/hooks';
import { fetchUser } from '../../redux/reducers/userReducer';
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
    const dispatch = useAppDispatch();

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

        data.name_public = privacyData.name_public;
        data.address_public = privacyData.address_public;
        data.phone_public = privacyData.phone_public;
        data.website_public = privacyData.website_public;
        data.expired_items_notifications = privacyData.expired_items_notifications;
        data.contact_notifications = privacyData.contact_notifications;

        setInitValues(data);
    }, [user, privacyData]);

    const onFinish = useCallback(
        async (values: any) => {
            const accountData: any = {};
            if (values.nickname) {
                accountData.nickname = values.nickname;
            }
            if (values.email) {
                accountData.email = values.email;
            }
            if (values.first_name) {
                accountData.first_name = values.first_name;
            }
            if (values.last_name) {
                accountData.last_name = values.last_name;
            }
            if (values.country) {
                accountData.country = parseInt(values.country);
            }
            if (values.language) {
                accountData.language = parseInt(values.language);
            }
            if (values.currency) {
                accountData.currency = parseInt(values.currency);
            }
            if (values.timezone) {
                accountData.timezone = parseInt(values.timezone);
            }
            if (values.user_type_name) {
                accountData.user_type_name = values.user_type_name;
            }
            if (values.user_status_name) {
                accountData.user_status_name = values.user_status_name;
            }
            if (values.address) {
                accountData.address = values.address;
            }
            if (values.address_2) {
                accountData.address_2 = values.address_2;
            }
            if (values.post_code) {
                accountData.post_code = values.post_code;
            }
            if (values.city) {
                accountData.city = values.city;
            }
            if (values.mobile_number) {
                accountData.mobile_number = values.mobile_number;
            }
            if (values.phone_number) {
                accountData.phone_number = values.phone_number;
            }
            if (values.fax_number) {
                accountData.fax_number = values.fax_number;
            }
            if (values.website) {
                accountData.website = values.website;
            }
            if (values.gender) {
                accountData.gender = parseInt(values.gender);
            }
            if (values.metric_system) {
                accountData.metric_system = 1;
            } else {
                accountData.metric_system = 2;
            }

            const privacyValues: any = {};
            privacyValues.name_public = values.name_public;
            privacyValues.address_public = values.address_public;
            privacyValues.phone_public = values.phone_public;
            privacyValues.website_public = values.website_public;
            privacyValues.expired_items_notifications = values.expired_items_notifications;
            privacyValues.contact_notifications = values.contact_notifications;

            try {
                await updateUser(accountData);
                await updatePrivacy(privacyValues);
            } catch (err) {
                console.error(err);
            }

            dispatch(fetchUser(user.id));
        },
        [dispatch, user.id]
    );

    if (!initVals) {
        return null;
    }

    return (
        <>
            <Form name="profile-form" initialValues={initVals} onFinish={onFinish}>
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
                <button type="submit" className="profile-save-button">
                    {t('lblSave')}
                </button>
            </Form>
        </>
    );
};
