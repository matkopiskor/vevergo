import { Col } from 'antd';
import { FC } from 'react';

export const FormCol2: FC = ({ children }) => {
    return (
        <Col xl={8} lg={8} sm={12} xs={24}>
            {children}
        </Col>
    );
};
