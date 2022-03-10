import { Col } from 'antd';
import { FC } from 'react';

export const FormCol: FC = ({ children }) => {
    return (
        <Col xl={12} lg={12} sm={24} xs={24}>
            {children}
        </Col>
    );
};
