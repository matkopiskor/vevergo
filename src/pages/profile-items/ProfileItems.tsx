import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { getUser } from '../../api/user';
import { BasicProfileInfoUser } from '../../components/basic-profile-info';
import { Card } from '../../components/card';
import { notify } from '../../services/notifications';
import { useAppHistory } from '../../utils/useAppHistory';
import './style.css';

const getId = (path: string) => {
    const id = path.slice(1).split('/')[1];
    console.log(id);
    return id;
};

const ProfileItems = () => {
    const { path } = useAppHistory();
    const [user, setUser] = useState<any>();
    useEffect(() => {
        if (!path) {
            return;
        }
        const userId = getId(path);

        if (!parseInt(userId)) {
            return;
        }

        const fetchUser = async (id: string) => {
            const resp: any = await getUser(id);
            if (resp?.data?.error_id !== 0) {
                notify({ type: 'WARNING', description: 'Greska' });
                return;
            }
            setUser(resp.data.items[0]);
        };
        fetchUser(userId);
    }, [path]);
    if (!user) {
        return null;
    }
    return (
        <div className="profile-items">
            <Row gutter={[20, 0]}>
                <Col xl={6} lg={6} sm={24} xs={24}>
                    <Card>
                        <BasicProfileInfoUser
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
                <Col xl={18} lg={18} sm={24} xs={24}>
                    Profile items - WIP
                </Col>
            </Row>
        </div>
    );
};

export default ProfileItems;
