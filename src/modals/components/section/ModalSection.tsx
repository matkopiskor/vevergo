import { Collapse } from 'antd';
import { FC } from 'react';

import './ModalSection.css';

const { Panel } = Collapse;

interface Props {
    title: string;
    defaultOpen?: boolean;
}

export const ModalSection: FC<Props> = ({ title, children, defaultOpen = false }) => {
    return (
        <div className="modal-section">
            <Collapse defaultActiveKey={!defaultOpen ? [] : ['1']} onChange={() => {}} ghost>
                <Panel header={title} key="1">
                    {children}
                </Panel>
            </Collapse>
        </div>
    );
};
