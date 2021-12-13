import { imageBaseUrl } from '../constants/imageBaseUrl';
import DefaultImage from '../assets/img/jpg.png';

export const createImageUrl = (defaultImage?: string) =>
    !!defaultImage ? imageBaseUrl + defaultImage + '.jpeg' : DefaultImage;
