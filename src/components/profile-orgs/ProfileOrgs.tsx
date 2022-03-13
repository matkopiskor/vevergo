import { Briefcase, Plus, Trash, Users } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ProfileInfoItem } from '../profile-info-item';
import { setActive as setActiveOrg } from '../../redux/reducers/organizationsReducer';

import './ProfileOrgs.css';
import { useCallback } from 'react';
import { useAppHistory } from '../../utils/useAppHistory';

export const ProfileOrgs = () => {
    const [t] = useTranslation();
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();
    const { list, membership } = useAppSelector((state) => state.organizations);

    const mappedOrgsList = list.map(({ name, id }) => ({ name, id }));
    const mappedOrgsMems = membership.map(({ name, id }) => ({ name, id }));

    const setActive = useCallback(
        (id: string) => {
            dispatch(setActiveOrg(id));
            goTo('/', false, {});
        },
        [dispatch, goTo]
    );
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
                                <Users size={15} onClick={() => setActive(id!)} />
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
                                <Users size={15} onClick={() => setActive(id!)} />
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
