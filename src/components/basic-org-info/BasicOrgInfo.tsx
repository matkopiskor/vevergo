import { FC, useCallback } from 'react';
import { CheckSquare, Clock, ExternalLink, LogOut, MapPin, Phone, Printer } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { uploadOrgImage } from '../../api/organizations';
import { ImgJpg } from '../../assets';
import { ERROR_CODES } from '../../constants/errorCodes';
import { useAppDispatch } from '../../redux/hooks';
import { removeFromLoading } from '../../redux/reducers/loadingReducer';
import { fetchOrgs, removeActive } from '../../redux/reducers/organizationsReducer';
import { store } from '../../redux/store';
import { notify } from '../../services/notifications';
import { getImage } from '../../utils/getImage';
import { useAppHistory } from '../../utils/useAppHistory';
import { AvatarDropzone } from '../avatar-dropzone';
import { ProfileInfoItem } from '../profile-info-item';

import './BasicOrgInfo.css';

const buildLocation = (
    country: string | null,
    city: string | null,
): { url: string | null; label: string | null } | null => {
    let placeLink = null;
    if (!!city || !!country) {
        placeLink = 'https://www.google.com/maps/place/';
        if (!!city) {
            if (!!country) {
                placeLink += ',+ ' + country;
            }
        } else {
            placeLink += country;
        }
    }

    const arr: string[] = [];
    let label = null;
    if (!!country) {
        arr.push(country);
    }
    if (!!city) {
        arr.push(city);
    }
    if (arr.length !== 0) {
        label = arr.join(', ');
    }
    if (!label && !placeLink) {
        return null;
    }
    return { label, url: placeLink };
};

const buildMemberSince = (create_date_formatted: string | null): string | null => {
    if (create_date_formatted) {
        return create_date_formatted;
    }
    return null;
};

const buildPhone = (mob: string | null, land: string | null): string | null => {
    if (!mob && !land) {
        return null;
    }
    const arr: string[] = [];
    if (land) {
        arr.push(land);
    }
    if (mob) {
        arr.push(mob);
    }
    if (arr.length !== 0) {
        return arr.join(', ');
    }
    return null;
};

interface IProps {
    name: string | null;
    profile_image: string | null;
    country_name: string | null;
    city: string | null;
    create_date_formatted: string | null;
    nickname: string | null;
    phone_number: string | null;
    mobile_number: string | null;
    fax_number: string | null;
    website: string | null;
    privacyData: any;
}

export const BasicOrgInfo: FC<IProps> = ({
    nickname,
    name,
    profile_image,
    country_name,
    city,
    create_date_formatted,
    privacyData,
    phone_number,
    mobile_number,
    fax_number,
    website,
}) => {
    const [t] = useTranslation();
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();
    const imageUrl = profile_image ? getImage(profile_image) : ImgJpg;
    const orgLocation = buildLocation(country_name, city);
    const memberSince = buildMemberSince(create_date_formatted);
    const phone = buildPhone(phone_number, mobile_number);

    const backToPersonal = useCallback(() => {
        dispatch(removeActive());
        goTo('/', false, {});
    }, [dispatch, goTo]);

    const onSaveAvatar = useCallback(
        async (data: any) => {
            const resp = await uploadOrgImage(data);
            if ((resp as any)?.data?.error_id && (resp as any)?.data?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(resp as any)?.data?.error_id] });
                store.dispatch(removeFromLoading());
            } else {
                dispatch(fetchOrgs());
            }
        },
        [dispatch],
    );

    return (
        <div className='basic-org-info'>
            <div className='basic-org-info-image'>
                <AvatarDropzone currentImage={imageUrl} onSaveImage={onSaveAvatar} />
            </div>
            <div>
                {privacyData?.name_public && <div className='org-name'>{name}</div>}
                {nickname && <div className='org-name org-name__nickname'>{nickname}</div>}
            </div>
            <div className='organization-divider' />
            {privacyData?.address_public && orgLocation && (
                <ProfileInfoItem>
                    {orgLocation.url && (
                        <a
                            href={orgLocation.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='profile-location'
                        >
                            <MapPin size={15} />
                            {orgLocation.label && <span className='org-location-label'>{orgLocation.label}</span>}
                        </a>
                    )}
                </ProfileInfoItem>
            )}
            {privacyData?.phone_public && phone && (
                <ProfileInfoItem>
                    <div className='profile-info-data'>
                        <Phone size={15} />
                        <span className='profile-info-label'>{phone}</span>
                    </div>
                </ProfileInfoItem>
            )}
            {privacyData?.phone_public && fax_number && (
                <ProfileInfoItem>
                    <div className='profile-info-data'>
                        <Printer size={15} />
                        <span className='profile-info-label'>{fax_number}</span>
                    </div>
                </ProfileInfoItem>
            )}
            {privacyData?.website_public && website && (
                <ProfileInfoItem>
                    <div className='profile-info-data'>
                        <ExternalLink size={15} />
                        <span className='profile-info-label'>{website}</span>
                    </div>
                </ProfileInfoItem>
            )}
            {memberSince && (
                <ProfileInfoItem>
                    <div className='org-info-data'>
                        <Clock size={15} />
                        <span className='org-info-label'>
                            {t('lblOrganizationCreated')}: {memberSince}
                        </span>
                    </div>
                </ProfileInfoItem>
            )}
            <div className='org-buttons'>
                <button className='org-button-1' onClick={() => {}}>
                    <CheckSquare size={15} />
                    <span>{t('lblPublishedItems')}</span>
                </button>
                <button className='org-button-2' onClick={backToPersonal}>
                    <LogOut size={15} />
                    <span>{t('lblSignOffFromProfile')}</span>
                </button>
            </div>
        </div>
    );
};
