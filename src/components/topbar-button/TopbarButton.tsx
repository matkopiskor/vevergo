import { FC } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import './TopbarButton.css';

interface ITopbarButton {
    label: string;
    open: boolean;
    onClick: any;
}

export const TopbarButton: FC<ITopbarButton> = ({ label, open, onClick }) => {
    return (
        <div className="topbar-button" onClick={onClick}>
            {label}
            {open ? <OpenArrow /> : <ClosedArrow />}
        </div>
    );
};

const OpenArrow: FC = () => <ChevronUp className="topbar-button__arrow" />;
const ClosedArrow: FC = () => <ChevronDown className="topbar-button__arrow" />;
