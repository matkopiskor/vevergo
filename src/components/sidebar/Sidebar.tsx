import { FC } from 'react';

import { useSidebar } from './useSidebar';

import './Sidebar.css';
import { Circle, Disc } from 'react-feather';

export const Sidebar: FC = () => {
    const { docked, open, onDockedClick, onSidebarMouseEnter, onSidegbarMouseLeave } = useSidebar();
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <span className="sidebar__header-title">Vevergo</span>
                <div className="sidebar__header-icon">{docked ? <Circle /> : <Disc />}</div>
            </div>
        </div>
    );
};
