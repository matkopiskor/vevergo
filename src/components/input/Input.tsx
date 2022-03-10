import { ChangeEventHandler, FC } from 'react';
import { Input as AntInput } from 'antd';

import './Input.css';

interface Props {
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string | number | undefined;
    placeholder?: string;
    type?: string;
    name?: string;
    labelClassName?: string;
    inputClassName?: string;
    Prefix?: JSX.Element;
    disabled?: boolean;
}

export const Input: FC<Props> = ({
    label,
    onChange,
    value,
    placeholder,
    type = 'text',
    name,
    labelClassName = '',
    inputClassName = '',
    Prefix,
    disabled,
}) => {
    return (
        <div className="input__wrapper">
            <label className={`input__label ${labelClassName}`}>{label}</label>
            <AntInput
                type={type}
                className={`input__select ${inputClassName}`}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                name={name}
                prefix={Prefix}
                disabled={disabled}
            />
        </div>
    );
};
