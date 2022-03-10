import { FC } from 'react';
import { Clock, MapPin } from 'react-feather';
import { useTranslation } from 'react-i18next';
import DefaultImage from '../../assets/img/jpg.png';
import { getImage } from '../../utils/getImage';
import { Image } from '../image';
import { ProfileInfoItem } from '../profile-info-item';

import './BasicOrgInfo.css';

interface IProps {
    name: string | null;
    profile_image: string | null;
    country_name: string | null;
    city: string | null;
    create_date_formatted: string | null;
    nickname: string | null;
}
const buildLocation = (
    country: string | null,
    city: string | null
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

export const BasicOrgInfo: FC<IProps> = ({
    nickname,
    name,
    profile_image,
    country_name,
    city,
    create_date_formatted,
}) => {
    const [t] = useTranslation();
    const imageUrl = profile_image ? getImage(profile_image) : DefaultImage;
    const orgLocation = buildLocation(country_name, city);
    const memberSince = buildMemberSince(create_date_formatted);

    return (
        <div className="basic-org-info">
            <Image src={imageUrl} />
            <div>
                <div className="org-name">{name}</div>
                {nickname && <div className="org-name org-name__nickname">{nickname}</div>}
            </div>
            <div className="organization-divider" />
            {orgLocation && (
                <ProfileInfoItem>
                    {orgLocation.url && (
                        <a
                            href={orgLocation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-location"
                        >
                            <MapPin size={15} />
                            {orgLocation.label && <span className="org-location-label">{orgLocation.label}</span>}
                        </a>
                    )}
                </ProfileInfoItem>
            )}
            {memberSince && (
                <ProfileInfoItem>
                    <div className="org-info-data">
                        <Clock size={15} />
                        <span className="org-info-label">
                            {t('lblOrganizationCreated')}: {memberSince}
                        </span>
                    </div>
                </ProfileInfoItem>
            )}
        </div>
    );
};
