import { FC } from 'react';
import { Button, Modal as AntModal } from 'antd';
import './Modal.css';

type size = 'sm' | 'md';

interface IProps {
    visible: boolean;
    okProps?: {
        label: string;
        handleOk: any;
        type?: any;
    };
    cancelProps: {
        label?: string;
        handleCancel: any;
        showAsButton?: boolean;
    };
    title: string;
    destroyOnClose?: boolean;
    size?: size;
}

export const Modal: FC<IProps> = ({ destroyOnClose, visible, okProps, cancelProps, title, children, size = 'sm' }) => {
    const { showAsButton = true, ...rest } = cancelProps;
    const footer: any[] = [];
    if (!!okProps) {
        footer.push(
            <Button type={okProps?.type ?? 'button'} key="ok" onClick={okProps.handleOk}>
                {okProps.label}
            </Button>
        );
    }
    if (showAsButton) {
        footer.push(
            <Button key="cancel" onClick={rest.handleCancel}>
                {rest.label}
            </Button>
        );
    }
    const width = size === 'sm' ? 520 : 800;
    return (
        <AntModal
            destroyOnClose={destroyOnClose}
            visible={visible}
            title={title}
            footer={footer}
            onCancel={cancelProps.handleCancel}
            width={width}
        >
            {children}
        </AntModal>
    );
};
