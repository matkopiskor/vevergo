import { Form, Radio, Row } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../input';
import { Select } from '../select';
import { FormCol } from './FormCol';
import { FormCol2 } from './FormCol2';

const { Item } = Form;

export const PersonalData: FC = () => {
    const [t] = useTranslation();

    return (
        <>
            <Row gutter={[30, 0]}>
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
            </Row>
            <Row gutter={[30, 0]}>
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
            </Row>{' '}
            <Row gutter={[30, 0]}>
                <FormCol2>
                    <Item name="website">
                        <Input label={t('lblWebsite')} />
                    </Item>
                </FormCol2>
            </Row>{' '}
            <Row gutter={[30, 0]}>
                <FormCol2>
                    <Item name="gender">
                        <Select
                            label={t('lblGender')}
                            options={[
                                { label: t('lblMale'), value: '1' },
                                { label: t('lblFemale'), value: '2' },
                            ]}
                        />
                    </Item>
                </FormCol2>
            </Row>{' '}
            <Row gutter={[30, 0]}>
                <FormCol2>
                    <div>{t('lblUnitSystem')}</div>
                    <Item name="metric_system">
                        <Radio.Group>
                            <Radio value="1">{t('lblMetricSystem')}</Radio>
                            <Radio value="2">{t('lblImperialSystem')}</Radio>
                        </Radio.Group>
                    </Item>
                </FormCol2>
            </Row>
        </>
    );
};
