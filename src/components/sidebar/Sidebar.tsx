import { FC } from 'react';

import { useSidebar } from './useSidebar';

import './Sidebar.css';
import { Circle, Disc, ChevronRight, ChevronDown, X, Menu } from 'react-feather';
import { CategoryIcon } from '../category-icon/CategoryIcon';
import { Button } from 'antd';
import Hammer from 'react-hammerjs';

export const Sidebar: FC = () => {
    const {
        onItemClick,
        docked,
        open,
        onDockedClick,
        onSidebarMouseEnter,
        onSidebarMouseLeave,
        sidebarClassName,
        sidebarTree,
        onFilterClick,
        t,
        onSwipe,
        isMobile,
        isHome,
    } = useSidebar();
    return (
        <>
            <Hammer onSwipe={onSwipe}>
                <div className="sidebar__hammer"></div>
            </Hammer>
            {isHome && (
                <div className="sidebar__mobile-menu" onClick={onSwipe}>
                    <Menu size={26} />
                </div>
            )}
            <div className={sidebarClassName}>
                <div className="sidebar__header" onMouseEnter={onSidebarMouseEnter} onMouseLeave={onSidebarMouseLeave}>
                    {(docked || open) && (
                        <>
                            <span className="sidebar__header-title">Vevergo</span>
                            <div className="sidebar__header-icon" onClick={isMobile ? onSwipe : onDockedClick}>
                                {isMobile ? <X /> : docked ? <Disc /> : <Circle />}
                            </div>
                        </>
                    )}
                </div>
                <div className="sidebar__content">
                    {sidebarTree.map((item) => (
                        <SidebarItem
                            key={item.id}
                            first
                            item={item}
                            onItemClick={onItemClick}
                            docked={docked}
                            open={open}
                        />
                    ))}
                </div>
                {(docked || open) && (
                    <div className="sidebar__footer">
                        <Button onClick={onFilterClick} className="sidebar__footer-button">
                            {t('lblFilter')}
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

const SidebarItem: FC<any> = ({ item, onItemClick, docked, open, first }) => {
    const { id, name, type, children, icon, active } = item;
    return (
        <>
            <div
                key={id}
                className={`sidebar__content-item ${
                    active
                        ? type === 'collapse'
                            ? 'sidebar__content-item-active'
                            : 'sidebar__content-item-active-last'
                        : ''
                }`}
                onClick={() => onItemClick(id)}
            >
                <div className="sidebar__content-item-label">
                    <div className="sidebar__content-item-icon">
                        <CategoryIcon itemIcon={icon} />
                    </div>
                    {(docked || open) && <span>{name}</span>}
                </div>
                {(docked || open) &&
                    type !== 'item' &&
                    (active ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
            </div>
            {active && children && !first && (
                <div className="sidebar__content-item-sub">
                    {(children as any[]).map((child) => (
                        <SidebarItem item={child} onItemClick={onItemClick} docked={docked} open={open} />
                    ))}
                </div>
            )}
        </>
    );
};
