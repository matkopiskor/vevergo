import { Col, Modal, Row } from 'antd';
import { FC } from 'react';
import { Filter } from 'react-feather';
import { ModalSection } from '../../modals/components/section';
import { Input } from '../input';
import { Select } from '../select';
import { Slider } from '../slider';
import { Switch } from '../switch';

import './CategoryFilters.css';
import { useCategoryFilters } from './useCategoryFilters';

export const CategoryFilters: FC = () => {
    const {
        activeAttributes,
        open,
        setOpen,
        listingTypesOptions,
        selectedListingTypeOption,
        setSelectedListingTypeOptions,
        priceFrom,
        setPriceFrom,
        priceTo,
        setPriceTo,
        adsWithoutPriceValue,
        setAdsWithoutPriceValue,
        countryOptions,
        selectedCountryOption,
        setSelectedCountryOption,
        adPlaceValue,
        setAdPlaceValue,
        publishedByValue,
        setPublishedByValue,
        adsWithoutMediaValue,
        setAdsWithoutMediaValue,
        categoryMeasurementUnitOptions,
        selectedCategoryMeasurementUnit,
        setSelectedCategoryMeasurementUnit,
        applyFilters,
    } = useCategoryFilters();
    return (
        <>
            <div className="category-filters__button" onClick={() => setOpen(true)}>
                <Filter />
            </div>
            <Modal title="Filters" visible={open} onOk={applyFilters} onCancel={() => setOpen(false)} width="100%">
                <ModalSection title="Type, Price & Place" defaultOpen>
                    <Row gutter={[20, 20]}>
                        <Col xl={8} sm={24}>
                            <Select
                                label="Ad type"
                                options={listingTypesOptions}
                                value={selectedListingTypeOption}
                                onChange={(val) => setSelectedListingTypeOptions(val as string[])}
                                placeholder="Select..."
                                mode="tags"
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Row gutter={[20, 0]}>
                                <Col span={8}>
                                    <Input
                                        label="Price/Type"
                                        value={priceFrom}
                                        onChange={(e) => setPriceFrom(Number(e.target.value))}
                                        placeholder="From"
                                        type="number"
                                    />
                                </Col>
                                <Col span={8}>
                                    <Input
                                        value={priceTo}
                                        onChange={(e) => setPriceTo(Number(e.target.value))}
                                        placeholder="To"
                                        type="number"
                                    />
                                </Col>
                                {!!categoryMeasurementUnitOptions && categoryMeasurementUnitOptions.length !== 0 && (
                                    <Col span={8}>
                                        <Select
                                            options={categoryMeasurementUnitOptions}
                                            value={selectedCategoryMeasurementUnit}
                                            onChange={(val) => setSelectedCategoryMeasurementUnit(val as string)}
                                            placeholder="Select..."
                                        />
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col xl={8} sm={24}>
                            <Slider
                                value={adsWithoutPriceValue}
                                onChange={setAdsWithoutPriceValue}
                                min={0}
                                max={2}
                                label="Includes ads without price"
                                prefix="Yes"
                                suffix="No"
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Select
                                label="Country"
                                options={countryOptions}
                                value={selectedCountryOption}
                                onChange={(val) => setSelectedCountryOption(val as string[])}
                                placeholder="Select..."
                                mode="tags"
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Input
                                label="Ad place"
                                value={adPlaceValue}
                                onChange={(e) => setAdPlaceValue(e.target.value)}
                                placeholder="Enter..."
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Slider
                                value={publishedByValue}
                                onChange={setPublishedByValue}
                                min={0}
                                max={2}
                                label="Published by"
                                prefix="Individual"
                                suffix="Organization"
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Slider
                                value={adsWithoutMediaValue}
                                onChange={setAdsWithoutMediaValue}
                                min={0}
                                max={1}
                                label="Includes ads without media"
                                prefix="No"
                                suffix="Yes"
                            />
                        </Col>
                    </Row>
                </ModalSection>
                {!!activeAttributes &&
                    Object.keys(activeAttributes).map((key) => {
                        const attr = activeAttributes[key];
                        return (
                            <ModalSection key={key} title={attr.name}>
                                <Row gutter={[20, 20]}>
                                    {attr.items.map((item) => {
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
                                    <Col xl={8} sm={24}>
                                        <Select
                                            label="Ad type"
                                            options={listingTypesOptions}
                                            value={selectedListingTypeOption}
                                            onChange={(val) => setSelectedListingTypeOptions(val as string[])}
                                            placeholder="Select..."
                                            mode="tags"
                                        />
                                    </Col>
                                </Row>
                            </ModalSection>
                        );
                    })}
            </Modal>
        </>
    );
};
