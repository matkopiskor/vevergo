import { Form, Row } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../input';
import { FormCol } from '../../profile-form/FormCol';
import { FormCol2 } from '../../profile-form/FormCol2';
import { Select } from '../../select';

const { Item } = Form;

export const OrganizationData: FC = () => {
    const [t] = useTranslation();

    return (
        <Row gutter={[30, 0]}>
            <FormCol>
                <Item name="taxable">
                    <Select
                        label={t('lblVatPayer')}
                        options={[
                            { label: t('lblYes'), value: '1' },
                            { label: t('lblNo'), value: '2' },
                        ]}
                    />
                </Item>
            </FormCol>
            <FormCol>
                <Item name="vat_id">
                    <Input label={t('lblVatId')} />
                </Item>
            </FormCol>
            <FormCol>
                <Item name="address">
                    <Input label={t('lblAddress')} />
                </Item>
            </FormCol>
            <FormCol>
                <Item name="address_2">
                    <Input label={t('lblAddress') + ' ' + 2} />
                </Item>
            </FormCol>
            <FormCol>
                <Item name="post_code">
                    <Input label={t('lblPostcode')} />
                </Item>
            </FormCol>
            <FormCol>
                <Item name="city">
                    <Input label={t('lblCity')} />
                </Item>
            </FormCol>
            <FormCol2>
                <Item name="mobile_number">
                    <Input label={t('lblMobileTelephoneNumber')} />
                </Item>
            </FormCol2>
            <FormCol2>
                <Item name="phone_number">
                    <Input label={t('lblLandlineTelephoneNumber')} />
                </Item>
            </FormCol2>
            <FormCol2>
                <Item name="fax_number">
                    <Input label={t('lblFaxNumber')} />
                </Item>
            </FormCol2>
            <FormCol2>
                <Item name="website">
                    <Input label={t('lblWebsite')} />
                </Item>
            </FormCol2>
            <FormCol2>
                <Item name="email">
                    <Input label={t('lblEmail')} />
                </Item>
            </FormCol2>
        </Row>
    );
};
