import { FC } from 'react';
import { Select as AntSelect } from 'antd';
import { SelectValue } from 'antd/lib/select';

import './Select.css';
import { Option as OptionModel } from '../../models/Option';

const { Option } = AntSelect;

interface Props {
    options: OptionModel[];
    onChange?: (value: SelectValue) => void;
    value?: SelectValue;
    placeholder?: string;
    label?: string;
    mode?: 'multiple' | 'tags';
    disabled?: boolean;
}

export const Select: FC<Props> = ({ options, onChange, value, placeholder, label, mode, disabled }) => {
    return (
        <div className="single-select__wrapper">
            <label className="single-select__label">{label}</label>
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
