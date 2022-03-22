import { Form, Row } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../redux/hooks';
import { Input } from '../input';
import { Select } from '../select';
import { FormCol } from './FormCol';

const { Item } = Form;

export const AccountData: FC = () => {
    const [t] = useTranslation();
    const countries = useAppSelector((state) => state.countries.list);
    const countryOptions = countries.map(({ id, name }) => ({ value: id.toString(), label: name }));

    const languages = useAppSelector((state) => state.languages.list);
    const languageOptions = languages.map(({ id, name }) => ({ value: id.toString(), label: name }));

    const currencies = useAppSelector((state) => state.currencies.list);
    const currencyOptions = currencies.map(({ id, name }) => ({ value: id.toString(), label: name }));

    const timezones = useAppSelector((state) => state.timezones.list);
    const timezoneOptions = timezones.map(({ id, name }) => ({ value: id.toString(), label: name }));
    return (
        <>
            <Row gutter={[30, 0]}>
                <FormCol>
                    <Item name="nickname">
                        <Input label={t('lblUserId')} disabled />
                    </Item>
                </FormCol>
            </Row>
            <Row gutter={[30, 0]}>
                <FormCol>
                    <Item name="email">
                        <Input label={t('lblEmail')} disabled />
                    </Item>
                </FormCol>
            </Row>
            <Row gutter={[30, 0]}>
                <FormCol>
                    <Item name="first_name">
                        <Input label={t('lblFirstName')} />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="last_name">
                        <Input label={t('lblLastName')} />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="country">
                        <Select
                            label={t('lblCountry')}
                            options={countryOptions}
                            infoText={t('lblCountryAdditionalInfo')}
                        />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="language">
                        <Select label={t('lblLanguage')} options={languageOptions} />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="currency">
                        <Select label={t('lblCurrency')} options={currencyOptions} />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="timezone">
                        <Select
                            label={t('lblTimeZone')}
                            options={timezoneOptions}
                            infoText={t('lblTimezoneAdditionalInfo')}
                        />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="user_type_name">
                        <Input label={t('lblUserType')} disabled />
                    </Item>
                </FormCol>
                <FormCol>
                    <Item name="user_status_name">
                        <Input label={t('lblUserStatus')} disabled />
                    </Item>
                </FormCol>
            </Row>
        </>
    );
};
