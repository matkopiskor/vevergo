import { Form, Row } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../redux/hooks';
import { Input } from '../../input';
import { FormCol } from '../../profile-form/FormCol';
import { Select } from '../../select';

const { Item } = Form;

export const AccountData: FC = () => {
    const [t] = useTranslation();
    const countries = useAppSelector((state) => state.countries.list);
    const countryOptions = countries.map(({ id, name }) => ({ value: id.toString(), label: name }));
    return (
        <>
            <Row gutter={[30, 0]}>
                <FormCol>
                    <Item name="nickname" rules={[{ required: true }]}>
                        <Input label={t('lblUserId')} required />
                    </Item>
                </FormCol>
                <FormCol />
                <FormCol>
                    <Item name="name" rules={[{ required: true }]}>
                        <Input label={t('lblCompanyName')} required />
                    </Item>
                </FormCol>
                <FormCol />

                <FormCol>
                    <Item name="description">
                        <Input label={t('lblLongCompanyName')} />
                    </Item>
                </FormCol>
                <FormCol />

                <FormCol>
                    <Item name="country">
                        <Select label={t('lblCountry')} options={countryOptions} />
                    </Item>
                </FormCol>
            </Row>
        </>
    );
};
