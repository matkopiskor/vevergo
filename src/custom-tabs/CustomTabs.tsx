import { FC } from 'react';
import './style.css';

interface IProps {
    tabs: any;
}

export const CustomTabs: FC<IProps> = ({ tabs }) => {
    const { panes, onTabClick, activeKey } = tabs;
    const panesArr = Array.from((panes as any) ?? {});
    return (
        <div className="tabs-list-container">
            <div className="tabs-list-wrapper">
                <div className="tabs-list">
                    {panesArr.map((pane: any) => {
                        let cn = 'tabs-item';
                        if (pane.key === activeKey) {
                            cn = cn + ' tabs-item-active';
                        }
                        return (
                            <div className={cn} key={pane.key} onClick={(e) => onTabClick(pane.key, e)}>
                                {pane?.props?.tab}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
