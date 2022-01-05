import { FC, useCallback, useMemo, useState } from 'react';
import { Check, Minus, Plus, X } from 'react-feather';

import './AdDetailsDetailsContainer.css';

interface IProps {
    attributes: any;
}

let count = 0;

export const AdDetailsDetailsContainer: FC<IProps> = ({ attributes }) => {
    const getValueAndUnit = useCallback(
        (value_formatted, measurement_unit_name, additional_measurement_units, metric_system, isMetricSystem) => {
            if (additional_measurement_units.length === 0) {
                return [value_formatted, measurement_unit_name];
            }
            if (metric_system === isMetricSystem) {
                return [value_formatted, measurement_unit_name];
            }
            const additionalMeasurementUnit = additional_measurement_units.find(
                ({ metric_system }: any) => metric_system === isMetricSystem,
            );
            const { value_formatted: value_formatted2 = value_formatted, name } = additionalMeasurementUnit || {};
            return [value_formatted2, name];
        },
        [],
    );
    const details = useMemo(() => {
        const isMetricSystem = false;
        let activeKey = '';
        const detailsPerKey = attributes.reduce((memo: any, item: any, index: any) => {
            const {
                group_name,
                name,
                value_formatted,
                measurement_unit_name,
                additional_measurement_units,
                metric_system,
            } = item;
            if (!memo[group_name]) {
                memo[group_name] = [];
            }
            const [value, unit] = getValueAndUnit(
                value_formatted,
                measurement_unit_name,
                additional_measurement_units,
                metric_system,
                isMetricSystem,
            );
            let newItem = {
                key: name,
                value: value,
                unit: unit,
            };
            if (index === 0) {
                activeKey = name;
            }
            if (index !== 0) {
                if (name !== activeKey) {
                    activeKey = name;
                } else {
                    newItem.key = '';
                }
            }
            memo[group_name].push(newItem);
            return memo;
        }, {});
        return detailsPerKey;
    }, [attributes, getValueAndUnit]);
    const [detailGroupsClosed, setDetailGroupsClosed] = useState<Set<any>>(new Set());
    const toggleDetailGroup = useCallback((detailGroupKey) => {
        setDetailGroupsClosed((prev) => {
            if (prev.has(detailGroupKey)) {
                prev.delete(detailGroupKey);
            } else {
                prev.add(detailGroupKey);
            }
            return prev;
        });
    }, []);
    return (
        <div className='ad-details__details-info-container'>
            {Object.keys(details).map((detailGroupKey, idx) => {
                const detailGroup = details[detailGroupKey];
                const isDetailGroupOpen = !detailGroupsClosed.has(detailGroupKey);
                count++;

                return (
                    <div key={idx} className='ad-details__details-info-group-container'>
                        <div
                            className={`ad-details__details-info-group-title-container ${
                                count % 2 === 1 ? 'ad-details__details-info-group-item-white' : ''
                            }`}
                            onClick={() => toggleDetailGroup(detailGroupKey)}
                        >
                            <div>
                                {isDetailGroupOpen ? (
                                    <Minus className='ad-details__details-info-group-title-container-icon' />
                                ) : (
                                    <Plus className='ad-details__details-info-group-title-container-icon' />
                                )}
                            </div>
                            <div>
                                <strong>{detailGroupKey}</strong>
                            </div>
                        </div>
                        {isDetailGroupOpen && (
                            <div className='ad-details__details-info-group-info-container'>
                                {detailGroup.map((detail: any, idxD: any) => {
                                    count++;
                                    const { key, value, unit } = detail;
                                    return (
                                        <div
                                            key={idx}
                                            className={`ad-details__details-info-group-info-item ${
                                                count % 2 === 1 ? 'ad-details__details-info-group-item-white' : ''
                                            }`}
                                        >
                                            <div className='ad-details__details-info-group-key'>
                                                {key}
                                                {key !== '' ? ':' : ''}
                                            </div>
                                            <div className='ad-details__details-info-group-value'>
                                                <strong>
                                                    <TransformTrueFalseToIcons value={value} /> {unit}
                                                </strong>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const TransformTrueFalseToIcons: FC<any> = ({ value }) => {
    switch (value) {
        case 'True':
            return <Check size={15} />;
        case 'False':
            return <X size={15} />;
        default:
            return value;
    }
};
