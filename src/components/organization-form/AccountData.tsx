import { Row, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../redux/hooks';
import { Input } from '../input';
import { FormCol } from '../profile-form/FormCol';
import { Select } from '../select';

const { Item } = Form;

export const AccountData = () => {
    const [t] = useTranslation();
    const countries = useAppSelector((state) => state.countries.list);
    const countryOptions = countries.map(({ id, name }) => ({ value: id.toString(), label: name }));
    return (
        <>
            <Row gutter={[30, 0]}>
                <FormCol>
                    <Item name="nickname">
                        <Input label={t('lblUserId')} disabled />
                    </Item>
                </FormCol>
                <FormCol />
                <FormCol>
                    <Item name="name">
                        <Input label={t('lblCompanyName')} disabled />
                    </Item>
                </FormCol>
                <FormCol />

                <FormCol>
                    <Item name="description">
                        <Input label={t('lblLongCompanyName')} disabled />
                    </Item>
                </FormCol>
                <FormCol />

                <FormCol>
                    <Item name="country">
                        <Select label={t('lblCountry')} options={countryOptions} disabled />
                    </Item>
                </FormCol>
                <FormCol />
                <FormCol>
                    <Item name="owner_nickname">
                        <Input label={t('lblOwner')} disabled />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="organization_type_name">
                        <Input label={t('lblOrganizationType')} disabled />
                    </Item>
                </FormCol>
            </Row>
            <button type="submit" className="organization-save-button">
                {t('lblSave')}
            </button>
        </>
    );
};
