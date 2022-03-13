import { Row, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { Input } from '../input';
import { FormCol } from '../profile-form/FormCol';
import { FormCol2 } from '../profile-form/FormCol2';
import { Select } from '../select';

const { Item } = Form;

export const OrganizationData = () => {
    const [t] = useTranslation();

    return (
        <>
            {' '}
            <Row gutter={[30, 0]}>
                <FormCol>
                    <Item name="taxable">
                        <Select
                            label={t('lblVatPayer')}
                            options={[
                                { label: t('lblYes'), value: '1' },
                                { label: t('lblNo'), value: '2' },
                            ]}
                            disabled
                        />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="vat_id">
                        <Input label={t('lblVatId')} disabled />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="address">
                        <Input label={t('lblAddress')} disabled />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="address_2">
                        <Input label={t('lblAddress')} disabled />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="post_code">
                        <Input label={t('lblPostcode')} disabled />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="city">
                        <Input label={t('lblCity')} disabled />
                    </Item>
                </FormCol>
                <FormCol2>
                    <Item name="mobile_number">
                        <Input label={t('lblMobileTelephoneNumber')} disabled />
                    </Item>
                </FormCol2>
                <FormCol2>
                    <Item name="phone_number">
                        <Input label={t('lblLandlineTelephoneNumber')} disabled />
                    </Item>
                </FormCol2>
                <FormCol2>
                    <Item name="fax_number">
                        <Input label={t('lblFaxNumber')} disabled />
                    </Item>
                </FormCol2>
                <FormCol2>
                    <Item name="website">
                        <Input label={t('lblWebsite')} disabled />
                    </Item>
                </FormCol2>
                <FormCol2>
                    <Item name="email">
                        <Input label={t('lblEmail')} disabled />
                    </Item>
                </FormCol2>
            </Row>
            <button type="submit" className="organization-save-button">
                {t('lblSave')}
            </button>
        </>
    );
};
