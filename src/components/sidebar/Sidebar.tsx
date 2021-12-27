import { FC } from 'react';

import { useSidebar } from './useSidebar';

import './Sidebar.css';
import { Circle, Disc, ChevronRight, ChevronDown, X } from 'react-feather';
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
        mobileOpen,
        selected,
    } = useSidebar();
    return (
        <>
            <Hammer onSwipe={onSwipe}>
                <div className='sidebar__hammer'></div>
            </Hammer>
            <div className={sidebarClassName}>
                <div className='sidebar__header' onMouseEnter={onSidebarMouseEnter} onMouseLeave={onSidebarMouseLeave}>
                    {(docked || open || mobileOpen) && (
                        <>
                            <span className='sidebar__header-title'>Vevergo</span>
                            <div className='sidebar__header-icon' onClick={isMobile ? onSwipe : onDockedClick}>
                                {isMobile ? <X /> : docked ? <Disc /> : <Circle />}
                            </div>
                        </>
                    )}
                </div>
                <div className='sidebar__content'>
                    {sidebarTree.map((item) => (
                        <SidebarItem
                            key={item.id}
                            first
                            item={item}
                            onItemClick={onItemClick}
                            docked={docked}
                            open={open}
                            mobileOpen={mobileOpen}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
                {(docked || open || mobileOpen) && (
                    <div className='sidebar__footer'>
                        <Button
                            onClick={onFilterClick}
                            className='sidebar__footer-button'
                            disabled={selected.length === 0}
                        >
                            {t('lblFilter')}
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

const SidebarItem: FC<any> = ({ item, onItemClick, docked, open, first, mobileOpen, isMobile }) => {
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
                <div className='sidebar__content-item-label'>
                    <div className='sidebar__content-item-icon'>
                        <CategoryIcon itemIcon={icon} />
                    </div>
                    {(isMobile ? mobileOpen : docked || open) && <span>{name}</span>}
                </div>
                {(isMobile ? mobileOpen : docked || open) &&
                    type !== 'item' &&
                    (active ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
            </div>
            {active && children && (
                <div className='sidebar__content-item-sub'>
                    {(children as any[]).map((child, idx) => (
                        <SidebarItem
                            key={idx}
                            item={child}
                            onItemClick={onItemClick}
                            docked={docked}
                            open={open}
                            mobileOpen={mobileOpen}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
