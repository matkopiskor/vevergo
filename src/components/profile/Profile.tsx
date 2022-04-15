import { Col, Row } from 'antd';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUser } from '../../redux/reducers/userReducer';
import { BasicProfileInfo } from '../basic-profile-info';
import { Card } from '../card';
import { ProfileForm } from '../profile-form';
import { ProfileOrgs } from '../profile-orgs';

import './Profile.css';

export const Profile: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.data);
    const privacyData = useAppSelector((state) => state.user.privacy);
    const shouldRefresh = useAppSelector((state) => state.languages.userProfileRefresh);

    useEffect(() => {
        if (shouldRefresh) {
            user?.id && dispatch(fetchUser(user.id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldRefresh]);

    if (!user) {
        return null;
    }

    return (
        <Row gutter={[20, 20]}>
            <Col xl={6} lg={8} sm={24} xs={24}>
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <Card>
                            <BasicProfileInfo
                                privacyData={privacyData}
                                city={user.city}
                                country_name={user.country_name}
                                create_date_formatted={user.create_date_formatted}
                                fax_number={user.fax_number}
                                first_name={user.first_name}
                                last_name={user.last_name}
                                member_since_formatted={user.member_since_formatted}
                                mobile_number={user.mobile_number}
                                name={user.name}
                                nickname={user.nickname}
                                phone_number={user.phone_number}
                                profile_image={user.profile_image}
                                website={user.website}
                                id={user.id}
                            />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <ProfileOrgs />
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xl={18} lg={16} sm={24} xs={24}>
                <Card>{!shouldRefresh && <ProfileForm user={user} privacyData={privacyData} />}</Card>
            </Col>
        </Row>
    );
};
