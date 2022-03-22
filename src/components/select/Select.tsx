import { FC } from 'react';
import { Select as AntSelect, Tooltip } from 'antd';
import { SelectValue } from 'antd/lib/select';

import './Select.css';
import { Option as OptionModel } from '../../models/Option';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Option } = AntSelect;

interface Props {
    options: OptionModel[];
    onChange?: (value: SelectValue) => void;
    value?: SelectValue;
    placeholder?: string;
    label?: string;
    mode?: 'multiple' | 'tags';
    disabled?: boolean;
    infoText?: string;
}

export const Select: FC<Props> = ({ options, onChange, value, placeholder, label, mode, disabled, infoText }) => {
    return (
        <div className="single-select__wrapper">
            <div className="info-text-wrapper">
                <label className="single-select__label">{label}</label>
                {infoText && (
                    <Tooltip title={infoText}>
                        <InfoCircleOutlined />
                    </Tooltip>
                )}
            </div>
            <AntSelect
                className="single-select__select"
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                allowClear
                mode={mode}
                disabled={disabled}
            >
                {options.map(({ label, value }) => {
                    return (
                        <Option key={value} value={value}>
                            {label}
                        </Option>
                    );
                })}
            </AntSelect>
        </div>
    );
};
