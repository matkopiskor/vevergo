import { ImgJpg } from '../assets';
import { imageBaseUrl } from '../constants/imageBaseUrl';

export const createImageUrl = (defaultImage?: string) =>
    !!defaultImage ? imageBaseUrl + defaultImage + '.jpeg' : ImgJpg;
