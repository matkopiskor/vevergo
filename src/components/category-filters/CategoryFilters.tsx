import { Col, Modal, Row } from 'antd';
import { FC } from 'react';
import { Filter } from 'react-feather';
import { ModalSection } from '../../modals/components/section';
import { Input } from '../input';
import { Select } from '../select';
import { Slider } from '../slider';

import './CategoryFilters.css';
import { useCategoryFilters } from './useCategoryFilters';

export const CategoryFilters: FC = () => {
    const {
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
            <div className='category-filters__button' onClick={() => setOpen(true)}>
                <Filter />
            </div>
            <Modal title='Filters' visible={open} onOk={applyFilters} onCancel={() => setOpen(false)} width='100%'>
                <ModalSection title='Type, Price & Place'>
                    <Row gutter={[20, 20]}>
                        <Col xl={8} sm={24}>
                            <Select
                                label='Ad type'
                                options={listingTypesOptions}
                                value={selectedListingTypeOption}
                                onChange={(val) => setSelectedListingTypeOptions(val as string[])}
                                placeholder='Select...'
                                mode='tags'
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Row gutter={[20, 0]}>
                                <Col span={8}>
                                    <Input
                                        label='Price/Type'
                                        value={priceFrom}
                                        onChange={(e) => setPriceFrom(Number(e.target.value))}
                                        placeholder='From'
                                        type='number'
                                    />
                                </Col>
                                <Col span={8}>
                                    <Input
                                        value={priceTo}
                                        onChange={(e) => setPriceTo(Number(e.target.value))}
                                        placeholder='To'
                                        type='number'
                                    />
                                </Col>
                                {!!categoryMeasurementUnitOptions && categoryMeasurementUnitOptions.length !== 0 && (
                                    <Col span={8}>
                                        <Select
                                            options={categoryMeasurementUnitOptions}
                                            value={selectedCategoryMeasurementUnit}
                                            onChange={(val) => setSelectedCategoryMeasurementUnit(val as string)}
                                            placeholder='Select...'
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
                                label='Includes ads without price'
                                prefix='Yes'
                                suffix='No'
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Select
                                label='Country'
                                options={countryOptions}
                                value={selectedCountryOption}
                                onChange={(val) => setSelectedCountryOption(val as string[])}
                                placeholder='Select...'
                                mode='tags'
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Input
                                value={adPlaceValue}
                                onChange={(e) => setAdPlaceValue(e.target.value)}
                                placeholder='Enter...'
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Slider
                                value={publishedByValue}
                                onChange={setPublishedByValue}
                                min={0}
                                max={2}
                                label='Published by'
                                prefix='Individual'
                                suffix='Organization'
                            />
                        </Col>
                        <Col xl={8} sm={24}>
                            <Slider
                                value={adsWithoutMediaValue}
                                onChange={setAdsWithoutMediaValue}
                                min={0}
                                max={1}
                                label='Includes ads without media'
                                prefix='No'
                                suffix='Yes'
                            />
                        </Col>
                    </Row>
                </ModalSection>
            </Modal>
        </>
    );
};
