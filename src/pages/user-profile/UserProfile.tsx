import { FC } from 'react';
import { Profile } from '../../components/profile';

import './UserProfile.css';

const UserProfile: FC = () => {
    return (
        <div className='user-profile'>
            <Profile />
        </div>
    );
};

export default UserProfile;
