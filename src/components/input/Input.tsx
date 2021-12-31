import { ChangeEventHandler, FC } from 'react';
import { Input as AntInput } from 'antd';

import './Input.css';

interface Props {
    label?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string | number | undefined;
    placeholder?: string;
    type?: string;
    name?: string;
}

export const Input: FC<Props> = ({ label, onChange, value, placeholder, type = 'text', name }) => {
    return (
        <div className="input__wrapper">
            <label className="input__label">{label}</label>
            <AntInput
                type={type}
                className="input__select"
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
};
