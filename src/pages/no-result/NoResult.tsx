import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';

export const NoResult: FC = () => {
    const { t } = useTranslation();
    return (
        <Row className="m-0">
            <Col sm="12">
                <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
                    <CardBody className="text-center">
                        <h1 className="font-large-2 my-1">{t('lblPageNotFound')}</h1>
                        <p className="pb-2">{t('lblPageNotFoundDetails')}</p>
                        <Button tag="a" href="/" color="primary" size="lg" className="mt-2">
                            {t('lblBackToHome')}
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};
