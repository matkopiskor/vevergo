import { profileImageBaseUrl } from '../constants/imageBaseUrl';

export const getImage = (id: string) => {
    return profileImageBaseUrl + id + '.jpeg';
};
