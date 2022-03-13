import { Col, Row } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { BasicOrgInfo } from '../basic-org-info';
import { Card } from '../card';
import { OrganizationForm } from '../organization-form';
import './Organization.css';

export const Organization = () => {
    const orgs = useAppSelector((state) => state.organizations.list);
    const mems = useAppSelector((state) => state.organizations.membership);
    const active = useAppSelector((state) => state.organizations.active)!;
    const privacyData = useAppSelector((state) => state.organizations.privacy);
    const users = useAppSelector((state) => state.organizations.users);
    const org = [...orgs, ...mems].find(({ id }) => id === active)! as any;
    if (!org) {
        return null;
    }
    return (
        <Row gutter={[20, 0]}>
            <Col xl={6} lg={8} sm={8} xs={24}>
                <Card>
                    <BasicOrgInfo
                        profile_image={org.profile_image}
                        name={org.name}
                        nickname={org.nickname}
                        country_name={org.country_name}
                        city={org.city}
                        create_date_formatted={org.create_date_formatted}
                    />
                </Card>
            </Col>
            <Col xl={18} lg={16} sm={16} xs={24}>
                <Card>
                    <OrganizationForm org={org} privacyData={privacyData} users={users} />
                </Card>
            </Col>
        </Row>
    );
};
