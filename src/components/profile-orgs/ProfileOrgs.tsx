import { Briefcase, Plus, Trash, Users } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ProfileInfoItem } from '../profile-info-item';
import {
    addOrgAction,
    clearStatus,
    deleteOrgAction,
    setActive as setActiveOrg,
} from '../../redux/reducers/organizationsReducer';

import './ProfileOrgs.css';
import { useCallback, useEffect, useState } from 'react';
import { useAppHistory } from '../../utils/useAppHistory';
import { Modal } from '../modal';
import { AddOrganizationForm } from './form/AddOrganizationForm';

export const ProfileOrgs = () => {
    const [addOrgOpen, setAddOrgOpen] = useState<boolean>(false);
    const [t] = useTranslation();
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();
    const { list, membership, statusSuccess } = useAppSelector((state) => state.organizations);

    const mappedOrgsList = list.map(({ name, id }) => ({ name, id }));
    const mappedOrgsMems = membership.map(({ name, id }) => ({ name, id }));

    const setActive = useCallback(
        (id: string) => {
            dispatch(setActiveOrg(id));
            goTo('/', false, {});
        },
        [dispatch, goTo]
    );

    const [orgId, setOrgId] = useState<string | undefined>();

    const deleteOrg = useCallback(
        (id: string) => {
            dispatch(deleteOrgAction(id));
            setOrgId(undefined);
        },
        [dispatch]
    );

    const onSaveOrg = useCallback(
        (values: any) => {
            dispatch(addOrgAction(values));
        },
        [dispatch]
    );

    useEffect(() => {
        if (statusSuccess) {
            setAddOrgOpen(false);
            dispatch(clearStatus());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusSuccess]);

    return (
        <>
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
                                    <Trash
                                        size={15}
                                        onClick={() => {
                                            setOrgId(id);
                                        }}
                                    />
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
                        <button onClick={() => setAddOrgOpen(true)}>
                            <span>
                                <Plus size={15} />
                            </span>
                            {t('lblAddOrganization')}
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                title={t('lblWarning')}
                visible={!!orgId}
                okProps={{
                    label: t('lblYes'),
                    handleOk: () => {
                        deleteOrg(orgId!);
                    },
                }}
                cancelProps={{
                    label: t('lblNo'),
                    handleCancel: () => {
                        setOrgId(undefined);
                    },
                }}
            >
                <span>{t('lblDeleteOrganization')}</span>
            </Modal>
            <Modal
                title={t('lblAddOrganization')}
                visible={addOrgOpen}
                cancelProps={{
                    handleCancel: () => {
                        setAddOrgOpen(false);
                    },
                    showAsButton: false,
                }}
                destroyOnClose
                size="md"
            >
                <AddOrganizationForm onSaveOrg={onSaveOrg} />
            </Modal>
        </>
    );
};
