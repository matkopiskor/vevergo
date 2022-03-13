import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { getOrganizationUsers } from '../../api/organizations';
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

    const [users, setUsers] = useState<any[]>();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getOrganizationUsers();
            if (resp?.data?.items?.length !== 0) {
                setUsers(resp.data.items);
            }
            setUsers([]);
        };
        fetchData();
    }, []);
    const org = [...orgs, ...mems].find(({ id }) => id === active)! as any;
    const hasRights = orgs.find(({ id }) => id === active) !== undefined;
    console.log(hasRights);
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
                    {users !== undefined && (
                        <OrganizationForm org={org} privacyData={privacyData} users={users} hasRights={hasRights} />
                    )}
                </Card>
            </Col>
        </Row>
    );
};
