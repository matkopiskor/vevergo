import { Col, Row } from 'antd';
import { t } from 'i18next';
import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { BasicProfileInfo } from '../basic-profile-info';
import { Card } from '../card';
import { ProfileForm } from '../profile-form';
import { ProfileOrgs } from '../profile-orgs';

import './Profile.css';

export const Profile: FC = () => {
    const user = useAppSelector((state) => state.user.data);
    const privacyData = useAppSelector((state) => state.user.privacy);
    if (!user) {
        return null;
    }

    return (
        <Row gutter={[20, 0]}>
            <Col xl={6} lg={8} sm={8} xs={24}>
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <Card>
                            <BasicProfileInfo
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
            <Col xl={18} lg={16} sm={16} xs={24}>
                <Card>
                    <ProfileForm user={user} privacyData={privacyData} />
                    <button type="submit" className="profile-save-button">
                        {t('lblSave')}
                    </button>
                </Card>
            </Col>
        </Row>
    );
};
