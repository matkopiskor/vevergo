import { Col, Row } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { deleteOrganizationUser, getOrganizationUsers } from '../../api/organizations';
import { ERROR_CODES } from '../../constants/errorCodes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchOrgs } from '../../redux/reducers/organizationsReducer';
import { notify } from '../../services/notifications';
import { BasicOrgInfo } from '../basic-org-info';
import { Card } from '../card';
import { OrganizationForm } from '../organization-form';
import './Organization.css';

export const Organization = () => {
    const dispatch = useAppDispatch();
    const userProfileRefresh = useAppSelector((state) => state.languages.userProfileRefresh);
    const [refreshing, setRefreshing] = useState<'idle' | 'refreshing' | 'refreshed'>('idle');
    useEffect(() => {
        if (userProfileRefresh && refreshing === 'idle') {
            setRefreshing('refreshing');
            return;
        }
        if (refreshing === 'refreshing' && !userProfileRefresh) {
            setRefreshing('refreshed');
            return;
        }
    }, [refreshing, userProfileRefresh]);
    useEffect(() => {
        if (refreshing === 'refreshed') {
            dispatch(fetchOrgs());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshing]);

    const orgs = useAppSelector((state) => state.organizations.list);
    const mems = useAppSelector((state) => state.organizations.membership);
    const active = useAppSelector((state) => state.organizations.active)!;
    const privacyData = useAppSelector((state) => state.organizations.privacy);
    const userId = useAppSelector((state) => state.user.id)!;

    const [users, setUsers] = useState<any[]>();

    const fetchData = useCallback(async () => {
        const resp = await getOrganizationUsers();
        if ((resp as any)?.data?.error_id && (resp as any)?.error_id !== 0) {
            notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
        }
        if (resp?.data?.items?.length !== 0) {
            setUsers(resp.data.items);
            return;
        }
        setUsers([]);
    }, []);

    const removeUser = useCallback(
        async (userId: string) => {
            await deleteOrganizationUser(userId);
            await fetchData();
        },
        [fetchData]
    );

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const org = [...orgs, ...mems].find(({ id }) => id === active)! as any;
    const hasRights = orgs.find(({ id }) => id === active) !== undefined;
    useEffect(() => {
        setRefreshing('idle');
    }, [org]);
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
                        phone_number={org.phone_number}
                        mobile_number={org.mobile_number}
                        fax_number={org.fax_number}
                        website={org.website}
                        privacyData={privacyData}
                    />
                </Card>
            </Col>
            <Col xl={18} lg={16} sm={16} xs={24}>
                <Card>
                    {users !== undefined && refreshing === 'idle' && !userProfileRefresh && (
                        <OrganizationForm
                            org={org}
                            privacyData={privacyData}
                            users={users}
                            hasRights={hasRights}
                            userId={userId}
                            removeUser={removeUser}
                        />
                    )}
                </Card>
            </Col>
        </Row>
    );
};
