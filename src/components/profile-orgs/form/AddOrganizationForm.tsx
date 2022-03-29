import { FC, useCallback } from 'react';
import { Form, Tabs } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import './AddOrganizationForm.css';
import { CustomTabs } from '../../../custom-tabs';
import { useTranslation } from 'react-i18next';
import { AccountData } from './AccountData';
import { OrganizationData } from './OrganizationData';
import { SecurityPrivacy } from './SecurityPrivacy';

const { TabPane } = Tabs;

const initialValues = {
    taxable: '2',
    name_public: true,
    address_public: true,
    phone_public: true,
    website_public: true,
    expired_items_notifications: true,
    contact_notifications: true,
};

interface IProps {
    onSaveOrg: (values: any) => void;
}

export const AddOrganizationForm: FC<IProps> = ({ onSaveOrg }) => {
    const [t] = useTranslation();
    const [form] = useForm();

    const onFinish = useCallback(
        (values: any) => {
            if (form.isFieldsTouched()) {
                const { taxable, ...rest } = values;
                if (taxable === '1') {
                    rest.taxable = true;
                } else {
                    rest.taxable = false;
                }
                onSaveOrg(rest);
            }
        },
        [form, onSaveOrg]
    );

    return (
        <Form form={form} name="add-organization-form" initialValues={initialValues} onFinish={onFinish}>
            <Tabs defaultActiveKey="1" type="card" renderTabBar={(tabs) => <CustomTabs tabs={tabs} />}>
                <TabPane key="1" tab={t('lblAccountData')} forceRender>
                    <AccountData />
                </TabPane>
                <TabPane key="2" tab={t('lblCompanyData')} forceRender>
                    <OrganizationData />
                </TabPane>
                <TabPane key="3" tab={t('lblSecurityPrivacy')} forceRender>
                    <SecurityPrivacy />
                </TabPane>
            </Tabs>
            <button type="submit" className="add-organization-save-button">
                {t('lblSave')}
            </button>
        </Form>
    );
};
