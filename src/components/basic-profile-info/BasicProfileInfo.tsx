import './BasicProfileInfo.css';
import { useTranslation } from 'react-i18next';
import { getImage } from '../../utils/getImage';
import { Clock, ExternalLink, MapPin, Phone, Printer } from 'react-feather';
import DefaultImage from '../../assets/img/jpg.png';
import { Image } from '../image';
import { FC } from 'react';
import { ProfileInfoItem } from '../profile-info-item';

const buildName = (name: string | null, first: string | null, last: string | null): string | null => {
    if (!!name) {
        return name;
    }
    const arr: string[] = [];
    if (!!first) {
        arr.push(first);
    }
    if (!!last) {
        arr.push(last);
    }
    if (arr.length !== 0) {
        return arr.join(' ');
    }
    return null;
};

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

const buildMemberSince = (
    member_since_formatted: string | null,
    create_date_formatted: string | null
): string | null => {
    if (member_since_formatted) {
        return member_since_formatted;
    }
    if (create_date_formatted) {
        return create_date_formatted;
    }
    return null;
};

interface IProps {
    name: string | null;
    profile_image: string | null;
    country_name: string | null;
    city: string | null;
    phone_number: string | null;
    mobile_number: string | null;
    first_name: string | null;
    last_name: string | null;
    nickname: string | null;
    fax_number: string | null;
    website: string | null;
    member_since_formatted: string | null;
    create_date_formatted: string | null;
}

export const BasicProfileInfo: FC<IProps> = ({
    name,
    profile_image,
    country_name,
    city,
    phone_number,
    mobile_number,
    first_name,
    last_name,
    nickname,
    fax_number,
    website,
    member_since_formatted,
    create_date_formatted,
}) => {
    const [t] = useTranslation();

    const imageUrl = profile_image ? getImage(profile_image) : DefaultImage;
    const userLocation = buildLocation(country_name, city);
    const phone = buildPhone(phone_number, mobile_number);
    const memberSince = buildMemberSince(member_since_formatted, create_date_formatted);

    return (
        <div className="basic-profile-info">
            <Image src={imageUrl} />
            <div>
                <div className="profile-name">{buildName(name, first_name, last_name)}</div>
                {nickname && <div className="profile-name profile-name__nickname">{nickname}</div>}
            </div>
            <div className="profile-divider" />
            {userLocation && (
                <ProfileInfoItem>
                    {userLocation.url && (
                        <a
                            href={userLocation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-location"
                        >
                            <MapPin size={15} />
                            {userLocation.label && <span className="profile-location-label">{userLocation.label}</span>}
                        </a>
                    )}
                </ProfileInfoItem>
            )}
            {phone && (
                <ProfileInfoItem>
                    <div className="profile-info-data">
                        <Phone size={15} />
                        <span className="profile-info-label">{phone}</span>
                    </div>
                </ProfileInfoItem>
            )}
            {fax_number && (
                <ProfileInfoItem>
                    <div className="profile-info-data">
                        <Printer size={15} />
                        <span className="profile-info-label">{fax_number}</span>
                    </div>
                </ProfileInfoItem>
            )}
            {website && (
                <ProfileInfoItem>
                    <div className="profile-info-data">
                        <ExternalLink size={15} />
                        <span className="profile-info-label">{website}</span>
                    </div>
                </ProfileInfoItem>
            )}
            {memberSince && (
                <ProfileInfoItem>
                    <div className="profile-info-data">
                        <Clock size={15} />
                        <span className="profile-info-label">
                            {t('lblMemberSince')}: {memberSince}
                        </span>
                    </div>
                </ProfileInfoItem>
            )}
        </div>
    );
};
