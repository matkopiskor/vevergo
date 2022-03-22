import { Form, Tabs } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { updateOrganization } from '../../api/organizations';
import { updatePrivacyOrg } from '../../api/privacy';
import { ERROR_CODES } from '../../constants/errorCodes';
import { useAppDispatch } from '../../redux/hooks';
import { fetchOrgs } from '../../redux/reducers/organizationsReducer';
import { notify } from '../../services/notifications';
import { PageTitle } from '../page-title/PageTitle';
import { AccountData } from './AccountData';
import { LinkedAccounts } from './LinkedAccounts';
import { OrganizationData } from './OrganizationData';

import './OrganizationForm.css';
import { SecurityPrivacy } from './SecurityPrivacy';

const { TabPane } = Tabs;

interface IProps {
    org: any;
    privacyData: any;
    users: any[];
    hasRights: boolean;
    userId: number;
}

export const OrganizationForm: FC<IProps> = ({ org, privacyData, users, hasRights, userId }) => {
    const [t] = useTranslation();
    const dispatch = useAppDispatch();
    const [initVals, setInitValues] = useState<any>();

    useEffect(() => {
        let data: any = {};
        if (org.nickname) {
            data.nickname = org.nickname;
        }
        if (org.name) {
            data.name = org.name;
        }
        if (org.description) {
            data.description = org.description;
        }
        if (org.country) {
            data.country = org.country.toString();
        }
        if (org.owner_nickname) {
            data.owner_nickname = org.owner_nickname;
        }
        if (org.organization_type_name) {
            data.organization_type_name = org.organization_type_name;
        }
        if (org.taxable) {
            data.taxable = '1';
        } else {
            data.taxable = '2';
        }
        if (org.vat_id) {
            data.vat_id = org.vat_id;
        }
        if (org.address) {
            data.address = org.address;
        }
        if (org.address_2) {
            data.address_2 = org.address_2;
        }
        if (org.post_code) {
            data.post_code = org.post_code;
        }
        if (org.city) {
            data.city = org.city;
        }
        if (org.mobile_number) {
            data.mobile_number = org.mobile_number;
        }
        if (org.phone_number) {
            data.phone_number = org.phone_number;
        }
        if (org.fax_number) {
            data.fax_number = org.fax_number;
        }
        if (org.website) {
            data.website = org.website;
        }
        if (org.email) {
            data.email = org.email;
        }

        data.address_public = privacyData.address_public;
        data.contact_notifications = privacyData.contact_notifications;
        data.email_public = privacyData.email_public;
        data.expired_items_notifications = privacyData.expired_items_notifications;
        data.name_public = privacyData.name_public;
        data.phone_public = privacyData.phone_public;
        data.website_public = privacyData.website_public;
        setInitValues(data);
    }, [org, privacyData]);

    const onFinish = useCallback(
        async (values: any) => {
            const accountData: any = { ...org };
            console.log(org);
            if (accountData.id) {
                accountData.organization_id = accountData.id;
            }
            if (values.nickname) {
                accountData.nickname = values.nickname;
            }
            if (values.name) {
                accountData.name = values.name;
            }
            if (values.description) {
                accountData.description = values.description;
            }
            if (values.country) {
                accountData.country = parseInt(values.country);
            }
            if (values.owner_nickname) {
                accountData.owner_nickname = values.owner_nickname;
            }
            if (values.organization_type_name) {
                accountData.organization_type_name = values.organization_type_name;
            }
            if (values.taxable === '1') {
                accountData.taxable = true;
            } else {
                accountData.taxable = false;
            }
            if (values.vat_id) {
                accountData.vat_id = values.vat_id;
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
            if (values.email) {
                accountData.email = values.email;
            }

            const privacyValues: any = {};
            privacyValues.address_public = values.address_public;
            privacyValues.contact_notifications = values.contact_notifications;
            privacyValues.email_public = values.email_public;
            privacyValues.expired_items_notifications = values.expired_items_notifications;
            privacyValues.name_public = values.name_public;
            privacyValues.phone_public = values.phone_public;
            privacyValues.website_public = values.website_public;

            try {
                const resp = await updateOrganization(accountData);
                if ((resp as any)?.error_id) {
                    if ((resp as any)?.error_id !== 0) {
                        notify({ type: 'WARNING', description: ERROR_CODES[(resp as any).error_id] });
                    } else {
                        notify({ type: 'SUCCESS', description: 'lblSuccessProfileUpdate' });
                    }
                }
                await updatePrivacyOrg(privacyValues);
            } catch (err) {
                console.error(err);
            }

            dispatch(fetchOrgs());
        },
        [dispatch, org]
    );

    if (!initVals) {
        return null;
    }

    return (
        <Form name="profile-form" initialValues={initVals} onFinish={onFinish}>
            <div className="profile-form-header">
                <PageTitle title={t('lblOrganizationProfile')} />
            </div>
            <Tabs defaultActiveKey="1" type="card">
                <TabPane key="1" tab={t('lblAccountData')}>
                    <AccountData hasRights={hasRights} />
                </TabPane>
                <TabPane key="2" tab={t('lblCompanyData')}>
                    <OrganizationData hasRights={hasRights} />
                </TabPane>
                <TabPane key="3" tab={t('lblSecurityPrivacy')}>
                    <SecurityPrivacy hasRights={hasRights} />
                </TabPane>
                {userId === org.owner && (
                    <TabPane key="4" tab={t('lblLinkedAccounts')}>
                        <LinkedAccounts users={users} />
                    </TabPane>
                )}
            </Tabs>
        </Form>
    );
};
