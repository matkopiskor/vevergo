import { FC } from 'react';
import { Select } from 'antd';
import { SelectValue } from 'antd/lib/select';

import './SingleSelect.css';
import { Option as OptionModel } from '../../models/Option';

const { Option } = Select;

interface Props {
    options: OptionModel[];
    onChange: (value: SelectValue) => void;
    value: SelectValue;
    placeholder?: string;
    label?: string;
}

export const SingleSelect: FC<Props> = ({ options, onChange, value, placeholder, label }) => {
    return (
        <div className='single-select__wrapper'>
            <label className='single-select__label'>{label}</label>
            <Select
                className='single-select__select'
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                allowClear
            >
                {options.map(({ label, value }) => {
                    return (
                        <Option key={value} value={value}>
                            {label}
                        </Option>
                    );
                })}
            </Select>
        </div>
    );
};
