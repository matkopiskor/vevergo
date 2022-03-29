import { FC, useState } from 'react';
import { Tabs } from 'antd';
import './TabView.css';

export const TabView: FC = ({ children }) => {
    const [, setActiveTab] = useState<string>('1');
    return (
        <Tabs
            className="tab-view"
            defaultActiveKey="1"
            onChange={setActiveTab}
            renderTabBar={(props: any) => {
                return (
                    <div className="tab-view__bar">
                        {props.panes.map(({ props: { tab }, key }: any) => (
                            <div
                                key={key}
                                className={`tab-view__tab ${props.activeKey === key ? 'tab-view__tab-active' : ''}`}
                                onClick={() => props.onTabClick(key)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                );
            }}
        >
            {children}
        </Tabs>
    );
};
