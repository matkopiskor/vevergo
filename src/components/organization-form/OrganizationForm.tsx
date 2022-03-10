import { Form, Tabs } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../page-title/PageTitle';
import { AccountData } from './AccountData';
import { OrganizationData } from './OrganizationData';

import './OrganizationForm.css';

const { TabPane } = Tabs;

interface IProps {
    org: any;
}

export const OrganizationForm: FC<IProps> = ({ org }) => {
    const [t] = useTranslation();
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

        setInitValues(data);
    }, [org]);

    if (!initVals) {
        return null;
    }

    console.log(org);

    return (
        <Form name="profile-form" initialValues={initVals}>
            <div className="profile-form-header">
                <PageTitle title={t('lblUserProfile')} />
            </div>
            <Tabs defaultActiveKey="1" type="card">
                <TabPane key="1" tab={t('lblAccountData')}>
                    <AccountData />
                </TabPane>
                <TabPane key="2" tab={t('lblCompanyData')}>
                    <OrganizationData />
                </TabPane>
                <TabPane key="3" tab={t('lblSecurityPrivacy')}>
                    {/* <SecurityPrivacy /> */}
                </TabPane>
                <TabPane key="4" tab={t('lblLinkedAccounts')}>
                    {/* <SecurityPrivacy /> */}
                </TabPane>
            </Tabs>
        </Form>
    );
};
