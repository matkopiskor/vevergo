import { FC } from 'react';
import { Button, Modal as AntModal } from 'antd';
import './Modal.css';

interface IProps {
    visible: boolean;
    okProps: {
        label: string;
        handleOk: any;
    };
    cancelProps: {
        label: string;
        handleCancel: any;
    };
    title: string;
}

export const Modal: FC<IProps> = ({ visible, okProps, cancelProps, title, children }) => {
    return (
        <AntModal
            visible={visible}
            title={title}
            footer={[
                <Button key="ok" onClick={okProps.handleOk}>
                    {okProps.label}
                </Button>,

                <Button key="cancel" onClick={cancelProps.handleCancel}>
                    {cancelProps.label}
                </Button>,
            ]}
        >
            {children}
        </AntModal>
    );
};
