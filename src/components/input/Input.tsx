import { ChangeEventHandler, FC } from 'react';
import { Input as AntInput, Tooltip } from 'antd';

import './Input.css';
import { InfoCircleOutlined } from '@ant-design/icons';

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
    infoText?: string;
    required?: boolean;
}

export const Input: FC<Props> = (props) => {
    const {
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
        infoText,
        required,
    } = props;
    return (
        <div className="input__wrapper">
            <div className="info-text-wrapper">
                <div>
                    <label className={`input__label ${labelClassName}`}>{label}</label>
                    {required && <span className="input__label-required">*</span>}
                </div>
                {infoText && (
                    <Tooltip title={infoText}>
                        <InfoCircleOutlined />
                    </Tooltip>
                )}
            </div>

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
