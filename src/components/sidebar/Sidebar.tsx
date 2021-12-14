import { FC } from 'react';

import { useSidebar } from './useSidebar';

import './Sidebar.css';

export const Sidebar: FC = () => {
    const {} = useSidebar();
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <span className="sidebar__header-title">Vevergo</span>
            </div>
        </div>
    );
};
