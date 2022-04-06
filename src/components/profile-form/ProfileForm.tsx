import { Button, Form, Tabs } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { FC, useCallback, useEffect, useState } from 'react';
import { List, Lock, Mail, UserMinus } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap';
import { updatePrivacy } from '../../api/privacy';
import { deactivateUser, updateUser } from '../../api/user';
import { CustomTabs } from '../../custom-tabs';
import { useAppDispatch } from '../../redux/hooks';
import { clearData, fetchUser } from '../../redux/reducers/userReducer';
import { PageTitle } from '../page-title/PageTitle';
import { AccountData } from './AccountData';
import { PersonalData } from './PersonalData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileForm.css';
import { SecurityPrivacy } from './SecurityPrivacy';
import { Modal } from '../modal';
import { Input } from '../input';
import { notify } from '../../services/notifications';
import { changePasswordRequest } from '../../api/changePassword';
import { changeEmailRequest } from '../../api/changeEmail';
import { clearOrgs } from '../../redux/reducers/organizationsReducer';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;
const { Item } = Form;

interface IProps {
    user: any;
    privacyData: any;
}

export const ProfileForm: FC<IProps> = ({ user, privacyData }) => {
    const navigate = useNavigate();
    const [t] = useTranslation();
    const [form] = useForm();
    const dispatch = useAppDispatch();

    const [initVals, setInitValues] = useState<any>();

    useEffect(() => {
        let data: any = {};
        if (user.nickname) {
            data.nickname = user.nickname;
        }
        if (user.email) {
            data.email = user.email;
        }
        if (user.first_name) {
            data.first_name = user.first_name;
        }
        if (user.last_name) {
            data.last_name = user.last_name;
        }
        if (user.country) {
            data.country = user.country.toString();
        }
        if (user.language) {
            data.language = user.language.toString();
        }
        if (user.currency) {
            data.currency = user.currency.toString();
        }
        if (user.timezone) {
            data.timezone = user.timezone.toString();
        }
        if (user.user_type_name) {
            data.user_type_name = user.user_type_name;
        }
        if (user.user_status_name) {
            data.user_status_name = user.user_status_name;
        }
        if (user.address) {
            data.address = user.address;
        }
        if (user.address_2) {
            data.address_2 = user.address_2;
        }
        if (user.post_code) {
            data.post_code = user.post_code;
        }
        if (user.city) {
            data.city = user.city;
        }
        if (user.mobile_number) {
            data.mobile_number = user.mobile_number;
        }
        if (user.phone_number) {
            data.phone_number = user.phone_number;
        }
        if (user.fax_number) {
            data.fax_number = user.fax_number;
        }
        if (user.website) {
            data.website = user.website;
        }
        if (user.gender) {
            data.gender = user.gender.toString();
        }
        if (user.metric_system) {
            data.metric_system = '1';
        } else {
            data.metric_system = '2';
        }

        data.name_public = privacyData.name_public;
        data.address_public = privacyData.address_public;
        data.phone_public = privacyData.phone_public;
        data.website_public = privacyData.website_public;
        data.expired_items_notifications = privacyData.expired_items_notifications;
        data.contact_notifications = privacyData.contact_notifications;

        setInitValues(data);
    }, [user, privacyData]);

    const onFinish = useCallback(
        async (values: any) => {
            if (!form.isFieldsTouched()) {
                return;
            }
            const accountData: any = { ...user };
            if (values.nickname) {
                accountData.nickname = values.nickname;
            }
            if (values.email) {
                accountData.email = values.email;
            }
            if (values.first_name) {
                accountData.first_name = values.first_name;
            }
            if (values.last_name) {
                accountData.last_name = values.last_name;
            }
            if (values.country) {
                accountData.country = parseInt(values.country);
            }
            if (values.language) {
                accountData.language = parseInt(values.language);
            }
            if (values.currency) {
                accountData.currency = parseInt(values.currency);
            }
            if (values.timezone) {
                accountData.timezone = parseInt(values.timezone);
            }
            if (values.user_type_name) {
                accountData.user_type_name = values.user_type_name;
            }
            if (values.user_status_name) {
                accountData.user_status_name = values.user_status_name;
            }
            if (values.address) {
                accountData.address = values.address;
            }
            if (values.address_2) {
                accountData.address_2 = values.address_2;
            }
            if (values.post_code) {
                accountData.post_code = values.post_code;
            }
            if (values.city) {
                accountData.city = values.city;
            }
            if (values.mobile_number) {
                accountData.mobile_number = values.mobile_number;
            }
            if (values.phone_number) {
                accountData.phone_number = values.phone_number;
            }
            if (values.fax_number) {
                accountData.fax_number = values.fax_number;
            }
            if (values.website) {
                accountData.website = values.website;
            }
            if (values.gender) {
                accountData.gender = parseInt(values.gender);
            }
            if (values.metric_system === '1') {
                accountData.metric_system = true;
            } else {
                accountData.metric_system = false;
            }

            const privacyValues: any = { ...privacyData };

            if (values.name_public !== undefined) {
                privacyValues.name_public = values.name_public;
            }
            if (values.address_public !== undefined) {
                privacyValues.address_public = values.address_public;
            }
            if (values.phone_public !== undefined) {
                privacyValues.phone_public = values.phone_public;
            }
            if (values.website_public !== undefined) {
                privacyValues.website_public = values.website_public;
            }
            if (values.expired_items_notifications !== undefined) {
                privacyValues.expired_items_notifications = values.expired_items_notifications;
            }
            if (values.contact_notifications !== undefined) {
                privacyValues.contact_notifications = values.contact_notifications;
            }

            try {
                await updateUser(accountData);
                await updatePrivacy(privacyValues);
            } catch (err) {
                console.error(err);
            }

            dispatch(fetchUser(user.id));
        },
        [dispatch, form, privacyData, user],
    );

    const [changeEmailOpen, setChangeEmailOpen] = useState<boolean>(false);
    const [changeEmailCheckOpen, setChangeEmailCheckOpen] = useState<string>();
    const onChangeEmail = useCallback((values: any) => {
        if (values.email) {
            setChangeEmailCheckOpen(values.email);
        }
    }, []);
    const changeEmail = useCallback(async (email: string) => {
        await changeEmailRequest({ email });
        setChangeEmailCheckOpen(undefined);
        setChangeEmailOpen(false);
    }, []);

    const [changePasswordOpen, setChangePasswordOpen] = useState<boolean>(false);
    const [changePasswordCheckOpen, setChangePasswordCheckOpen] = useState<any>();
    const onChangePassword = useCallback((values: any) => {
        if (values['confirm-new-password'] !== values['new-password']) {
            notify({ type: 'WARNING', description: 'lblPasswordDoesntMatch' });
            return;
        }
        if (values['new-password'] === values['old-password']) {
            notify({ type: 'WARNING', description: 'lblSamePassword' });
            return;
        }
        setChangePasswordCheckOpen(values);
    }, []);
    const changePassword = useCallback(async (values: any) => {
        const data = {
            password: values['old-password'],
            new_password: values['new-password'],
            new_password_2: values['confirm-new-password'],
        };

        await changePasswordRequest(data);
        setChangePasswordCheckOpen(undefined);
        setChangePasswordOpen(false);
    }, []);

    const [deactivateAccountOpen, setDeactivateAccountOpen] = useState<boolean>(false);

    const logout = useCallback(() => {
        dispatch(clearData());
        dispatch(clearOrgs());
        navigate('/');
    }, [dispatch, navigate]);

    const deactivateAccount = useCallback(async () => {
        const success = await deactivateUser();
        if (success) {
            logout();
        }
    }, [logout]);

    if (!initVals) {
        return null;
    }

    return (
        <>
            <Form form={form} name='profile-form' initialValues={initVals} onFinish={onFinish}>
                <div className='profile-form-header'>
                    <PageTitle title={t('lblUserProfile')} />
                    <div>
                        <UncontrolledButtonDropdown direction='start' size='sm'>
                            <DropdownToggle color='primary' className='vvg-user-options-container'>
                                {/* {I18n.t("lblOptions")} */}
                                <List size={15} />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                    className='user-options-container-item'
                                    onClick={() => setChangeEmailOpen(true)}
                                >
                                    <Mail size={15} />
                                    <span className='align-middle ml-50'>{t('lblChangeEmail')}</span>
                                </DropdownItem>
                                <DropdownItem
                                    className='user-options-container-item'
                                    onClick={() => setChangePasswordOpen(true)}
                                >
                                    <Lock size={15} />
                                    <span className='align-middle ml-50'>{t('lblChangePassword')}</span>
                                </DropdownItem>
                                <DropdownItem
                                    className='user-options-container-item'
                                    onClick={() => setDeactivateAccountOpen(true)}
                                >
                                    <UserMinus size={15} />
                                    <span className='align-middle ml-50'>{t('lblDeactivateAccount')}</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </div>
                <Tabs defaultActiveKey='1' type='card' renderTabBar={(tabs) => <CustomTabs tabs={tabs} />}>
                    <TabPane key='1' tab={t('lblAccountData')}>
                        <AccountData />
                    </TabPane>
                    <TabPane key='2' tab={t('lblPersonalData')}>
                        <PersonalData />
                    </TabPane>
                    <TabPane key='3' tab={t('lblSecurityPrivacy')}>
                        <SecurityPrivacy />
                    </TabPane>
                </Tabs>
                <button type='submit' className='profile-save-button'>
                    {t('lblSave')}
                </button>
            </Form>
            <Modal
                title={t('lblEnterNewEmail')}
                visible={changeEmailOpen}
                cancelProps={{
                    handleCancel: () => {
                        setChangeEmailOpen(false);
                        setChangeEmailCheckOpen(undefined);
                    },
                    showAsButton: false,
                }}
                destroyOnClose
            >
                <Form name='change-email-form' onFinish={onChangeEmail}>
                    <Item name='email' rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type='email'
                            placeholder={t('lblEmail')}
                            label={t('lblEmail')}
                            labelClassName='profile__form-input-label'
                            inputClassName='profile__form-input'
                            Prefix={<Mail size={16} className='profile__form-input-icon' />}
                        />
                    </Item>
                    <Button className='profile__form-login' htmlType='submit'>
                        {t('lblChange')}
                    </Button>
                </Form>
            </Modal>
            <Modal
                title={t('lblWarning')}
                visible={!!changeEmailCheckOpen}
                okProps={{
                    label: t('lblYes'),
                    handleOk: () => {
                        changeEmail(changeEmailCheckOpen!);
                    },
                }}
                cancelProps={{
                    label: t('lblNo'),
                    handleCancel: () => {
                        setChangeEmailCheckOpen(undefined);
                    },
                }}
            >
                <span>{t('lblDeleteOrganization')}</span>
            </Modal>
            <Modal
                title={t('lblChangePassword')}
                visible={changePasswordOpen}
                cancelProps={{
                    handleCancel: () => {
                        setChangePasswordOpen(false);
                        setChangeEmailCheckOpen(undefined);
                    },
                    showAsButton: false,
                }}
                destroyOnClose
            >
                <Form name='change-password-form' onFinish={onChangePassword}>
                    <Item name='old-password' rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type='password'
                            placeholder={t('lblOldPassword')}
                            label={t('lblOldPassword')}
                            labelClassName='profile__form-input-label'
                            inputClassName='profile__form-input'
                            Prefix={<Mail size={16} className='profile__form-input-icon' />}
                        />
                    </Item>
                    <Item name='new-password' rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type='password'
                            placeholder={t('lblNewPassword')}
                            label={t('lblNewPassword')}
                            labelClassName='profile__form-input-label'
                            inputClassName='profile__form-input'
                            Prefix={<Lock size={16} className='profile__form-input-icon' />}
                        />
                    </Item>
                    <Item name='confirm-new-password' rules={[{ required: true, message: t('lblRequired') }]}>
                        <Input
                            type='password'
                            placeholder={t('lblConfirmPassword')}
                            label={t('lblConfirmPassword')}
                            labelClassName='profile__form-input-label'
                            inputClassName='profile__form-input'
                            Prefix={<Lock size={16} className='profile__form-input-icon' />}
                        />
                    </Item>
                    <Button className='profile__form-login' htmlType='submit'>
                        {t('lblChange')}
                    </Button>
                </Form>
            </Modal>
            <Modal
                title={t('lblWarning')}
                visible={!!changePasswordCheckOpen}
                okProps={{
                    label: t('lblYes'),
                    handleOk: () => {
                        changePassword(changePasswordCheckOpen!);
                    },
                }}
                cancelProps={{
                    label: t('lblNo'),
                    handleCancel: () => {
                        setChangePasswordCheckOpen(undefined);
                    },
                }}
            >
                <span>{t('lblChangePassword')}</span>
            </Modal>
            <Modal
                title={t('lblWarning')}
                visible={!!deactivateAccountOpen}
                okProps={{
                    label: t('lblYes'),
                    handleOk: () => {
                        deactivateAccount();
                    },
                }}
                cancelProps={{
                    label: t('lblNo'),
                    handleCancel: () => {
                        setDeactivateAccountOpen(false);
                    },
                }}
            >
                <span>{t('lblDeactivateAccount')}</span>
            </Modal>
        </>
    );
};
