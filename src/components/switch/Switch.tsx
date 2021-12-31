import { FC } from 'react';
import { Switch as AntSwitch } from 'antd';

import './Switch.css';
import { SwitchChangeEventHandler } from 'antd/lib/switch';

interface Props {
    label?: string;
    onChange: SwitchChangeEventHandler;
    checked: boolean;
}

export const Switch: FC<Props> = ({ label, onChange, checked }) => {
    return (
        <div className="switch__wrapper">
            <label className="switch__label">{label}</label>
            <AntSwitch className="switch__select" onChange={onChange} checked={checked} />
        </div>
    );
};
