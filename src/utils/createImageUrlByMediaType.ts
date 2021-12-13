import { imageBaseUrl } from '../constants/imageBaseUrl';

export const createImageUrlByMediaType = (mediaType: number, id: string, videoCode: string) =>
    mediaType === 1 ? imageBaseUrl + id + '.jpeg' : 'https://img.youtube.com/vi/' + videoCode + '/maxresdefault.jpg';
