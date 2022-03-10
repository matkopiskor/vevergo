import { Col, Form, Modal, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { FC, useMemo, useState } from 'react';
import { ModalSection } from '../../modals/components/section';
import { useAppSelector } from '../../redux/hooks';
import { Select } from '../select';
import { Option } from '../../models/Option';
import { Input } from '../input';
import { Slider } from '../slider';
import { Switch } from '../switch';

const FormCol: FC = ({ children }) => {
    return (
        <Col xl={8} lg={8} sm={12} xs={24}>
            {children}
        </Col>
    );
};

const { Item } = Form;

export const CFForm: FC<any> = ({ open, applyFilters, setOpen, activeAttributes, initialValues }) => {
    const [form] = useForm();
    // LISTING TYPES
    const listingTypes = useAppSelector((state) => state.listingTypes.list);
    const listingTypesOptions = useMemo<Option[]>(
        () =>
            listingTypes.map(({ id, name }) => ({
                value: id.toString(),
                label: name,
            })),
        [listingTypes]
    );

    // Country
    const countries = useAppSelector((state) => state.countries.list);
    const countryOptions = useMemo<Option[]>(
        () =>
            countries.map(({ id, name }) => ({
                value: id.toString(),
                label: name,
            })),
        [countries]
    );

    const [fromToError, setFromToError] = useState<boolean>(false);

    const onFormChange = (values: any, allValues: any) => {
        if (values?.price_from && allValues?.price_to) {
            if (values.price_from >= allValues.price_to) {
                setFromToError(true);
            } else {
                setFromToError(false);
            }
        }
        if (values?.price_to && allValues?.price_from) {
            if (values.price_to <= allValues.price_from) {
                setFromToError(true);
            } else {
                setFromToError(false);
            }
        }
    };

    return (
        <Form form={form} name="common-filters" onValuesChange={onFormChange} initialValues={initialValues}>
            <Modal
                title="Filers"
                visible={open}
                onOk={() => {
                    const values = form.getFieldsValue();
                    applyFilters(values);
                }}
                onCancel={() => setOpen(false)}
                width="100%"
            >
                <ModalSection title="Type, Price & Place" defaultOpen>
                    <Row gutter={[20, 20]}>
                        <FormCol>
                            <Item name="listing_type">
                                <Select
                                    label="Ad type"
                                    options={listingTypesOptions}
                                    placeholder="Select..."
                                    mode="tags"
                                />
                            </Item>
                        </FormCol>
                        <FormCol>
                            <Row gutter={[20, 0]}>
                                <Col span={12}>
                                    <Item name="price_from" validateStatus={fromToError ? 'error' : undefined}>
                                        <Input label="Price/Type" placeholder="From" type="number" />
                                    </Item>
                                </Col>
                                <Col span={12}>
                                    <Item name="price_to" validateStatus={fromToError ? 'error' : undefined}>
                                        <Input placeholder="To" type="number" />
                                    </Item>
                                </Col>
                                {/* {!!categoryMeasurementUnitOptions && categoryMeasurementUnitOptions.length !== 0 && (
                        <Col span={8}>
                            <Select
                                options={categoryMeasurementUnitOptions}
                                value={selectedCategoryMeasurementUnit}
                                onChange={(val) => setSelectedCategoryMeasurementUnit(val as string)}
                                placeholder="Select..."
                            />
                        </Col>
                    )} */}
                            </Row>
                        </FormCol>
                        <FormCol>
                            <Item name="include_items_without_price">
                                <Slider min={0} max={2} label="Includes ads without price" prefix="Yes" suffix="No" />
                            </Item>
                        </FormCol>
                        <FormCol>
                            <Item name="country">
                                <Select label="Country" options={countryOptions} placeholder="Select..." mode="tags" />
                            </Item>
                        </FormCol>
                        <FormCol>
                            <Item name="place">
                                <Input label="Ad place" placeholder="Enter..." />
                            </Item>
                        </FormCol>
                        <FormCol>
                            <Item name="owner_type">
                                <Slider
                                    min={0}
                                    max={2}
                                    label="Published by"
                                    prefix="Individual"
                                    suffix="Organization"
                                />
                            </Item>
                        </FormCol>
                        <Col xl={8} sm={24}>
                            <Item name="include_items_with_media">
                                <Slider min={0} max={1} label="Includes ads without media" prefix="No" suffix="Yes" />
                            </Item>
                        </Col>
                    </Row>
                </ModalSection>
                {!!activeAttributes &&
                    Object.keys(activeAttributes).map((key) => {
                        const attr = activeAttributes[key];
                        return (
                            <ModalSection key={key} title={attr.name}>
                                <Row gutter={[20, 20]}>
                                    {attr.items.map((item: any) => {
                                        switch (item.dataType) {
                                            case 1: {
                                                return (
                                                    <Col key={item.attributeId} xl={8} sm={24}>
                                                        <Input
                                                            label={item.name}
                                                            value={''}
                                                            onChange={(e) => {}}
                                                            placeholder="Enter..."
                                                            name={item.attributeId.toString()}
                                                        />
                                                    </Col>
                                                );
                                            }
                                            case 2:
                                            case 3: {
                                                if (!!item.filterMaximum && !!item.filterMaximum && !!item.filterStep) {
                                                    const data: any[] = [];
                                                    for (
                                                        let i = Number(item.filterMinimum);
                                                        i <= Number(item.filterMaximum);
                                                        i += Number(item.filterStep)
                                                    ) {
                                                        data.push({ value: i.toString(), label: i.toString() });
                                                    }
                                                    if (!!item.measurementUnits && item.measurementUnits.length !== 0) {
                                                        return (
                                                            <Col key={item.attributeId} xl={8} sm={24}>
                                                                <Row gutter={[20, 0]}>
                                                                    <Col span={16}>
                                                                        <Select
                                                                            label={item.name}
                                                                            options={data}
                                                                            value={undefined}
                                                                            onChange={(val) => {}}
                                                                            placeholder="Select..."
                                                                        />
                                                                    </Col>
                                                                    <Col span={8}>
                                                                        <Select
                                                                            options={item.measurementUnits}
                                                                            value={undefined}
                                                                            onChange={(val) => {}}
                                                                            placeholder="Select..."
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col key={item.attributeId} xl={8} sm={24}>
                                                            <Select
                                                                label={item.name}
                                                                options={data}
                                                                value={undefined}
                                                                onChange={(val) => {}}
                                                                placeholder="Select..."
                                                            />
                                                        </Col>
                                                    );
                                                }
                                                if (!!item.measurementUnits && item.measurementUnits.length !== 0) {
                                                    return (
                                                        <Col key={item.attributeId} xl={8} sm={24}>
                                                            <Row gutter={[20, 0]}>
                                                                <Col span={16}>
                                                                    <Input
                                                                        label={item.name}
                                                                        value={''}
                                                                        onChange={(e) => {}}
                                                                        placeholder="Enter..."
                                                                        name={item.attributeId.toString()}
                                                                        type="number"
                                                                    />
                                                                </Col>
                                                                <Col span={8}>
                                                                    <Select
                                                                        options={item.measurementUnits}
                                                                        value={undefined}
                                                                        onChange={(val) => {}}
                                                                        placeholder="Select..."
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    );
                                                }
                                                return (
                                                    <Col key={item.attributeId} xl={8} sm={24}>
                                                        <Input
                                                            type="number"
                                                            label={item.name}
                                                            value={''}
                                                            onChange={(e) => {}}
                                                            placeholder="Enter..."
                                                            name={item.attributeId.toString()}
                                                        />
                                                    </Col>
                                                );
                                            }
                                            case 4: {
                                                return 'Date';
                                            }
                                            case 5: {
                                                return 'date time';
                                            }
                                            case 6: {
                                                return (
                                                    <Col key={item.attributeId} xl={8} sm={24}>
                                                        <Switch label={item.name} checked={false} onChange={() => {}} />
                                                    </Col>
                                                );
                                            }
                                            case 7: {
                                                return (
                                                    <Col key={item.attributeId} xl={8} sm={24}>
                                                        <Select
                                                            label={item.name}
                                                            options={item.values}
                                                            value={undefined}
                                                            onChange={(val) => {}}
                                                            placeholder="Select..."
                                                        />
                                                    </Col>
                                                );
                                            }
                                            case 8: {
                                                return (
                                                    <Col key={item.attributeId} xl={8} sm={24}>
                                                        <Select
                                                            label={item.name}
                                                            options={item.values}
                                                            value={undefined}
                                                            onChange={(val) => {}}
                                                            placeholder="Select..."
                                                            mode="multiple"
                                                        />
                                                    </Col>
                                                );
                                            }
                                            default: {
                                                return null;
                                            }
                                        }
                                    })}
                                    {/* <Col xl={8} sm={24}>
                            <Select
                                label="Ad type"
                                options={listingTypesOptions}
                                value={selectedListingTypeOption}
                                onChange={(val) => setSelectedListingTypeOptions(val as string[])}
                                placeholder="Select..."
                                mode="tags"
                            />
                        </Col> */}
                                </Row>
                            </ModalSection>
                        );
                    })}
            </Modal>
        </Form>
    );
};
