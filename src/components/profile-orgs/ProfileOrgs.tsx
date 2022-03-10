import { Briefcase, Plus, Trash, Users } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../redux/hooks';
import { ProfileInfoItem } from '../profile-info-item';
import './ProfileOrgs.css';

export const ProfileOrgs = () => {
    const [t] = useTranslation();
    const { list, membership } = useAppSelector((state) => state.organizations);

    const mappedOrgsList = list.map(({ name, id }) => ({ name, id }));
    const mappedOrgsMems = membership.map(({ name, id }) => ({ name, id }));
    return (
        <div className="profile-orgs">
            <ProfileInfoItem>
                <div className="profile-orgs-title">
                    <Briefcase size={20} />
                    <span>{t('lblOrganizations')}</span>
                </div>
            </ProfileInfoItem>
            <div className="profile-divider" />
            <div className="profile-orgs-list">
                {mappedOrgsList.map(({ name, id }) => (
                    <div key={id} className="profile-orgs-list-item">
                        <span>{name}</span>
                        <div className="profile-orgs-list-item-buttons">
                            <span>
                                <Users size={15} />
                            </span>
                            <span>
                                <Trash size={15} />
                            </span>
                        </div>
                    </div>
                ))}
                {mappedOrgsMems.map(({ name, id }) => (
                    <div key={id} className="profile-orgs-list-item">
                        <span>{name}</span>
                        <div className="profile-orgs-list-item-buttons">
                            <span>
                                <Users size={15} />
                            </span>
                        </div>
                    </div>
                ))}
                <div className="profile-orgs-add">
                    <button>
                        <span>
                            <Plus size={15} />
                        </span>
                        {t('lblAddOrganization')}
                    </button>
                </div>
            </div>
        </div>
    );
};
