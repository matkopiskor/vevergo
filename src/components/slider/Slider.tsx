import { FC } from 'react';
import { Slider as AntSlider } from 'antd';

import './Slider.css';

interface Props {
    value?: number;
    min: number;
    max: number;
    label?: string;
    prefix?: string;
    suffix?: string;
    onChange?: any;
}

export const Slider: FC<Props> = ({ label, value, min, max, suffix, prefix, onChange }) => {
    return (
        <div className="slider__wrapper">
            <label className="slider__label">{label}</label>
            <div className="slider__main">
                {prefix && <span className="slider__prefix">{prefix}</span>}
                <AntSlider
                    className="slider__slider"
                    value={value}
                    min={min}
                    max={max}
                    onChange={onChange}
                    tooltipVisible={false}
                />
                {suffix && <span className="slider__prefix">{suffix}</span>}
            </div>
        </div>
    );
};
