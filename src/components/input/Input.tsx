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
    infoText,
}) => {
    return (
        <div className="input__wrapper">
            <div className="info-text-wrapper">
                <label className={`input__label ${labelClassName}`}>{label}</label>
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
