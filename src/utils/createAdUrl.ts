import { BASE_URL } from '../constants/baseUrl';
import { findUrlCategories } from './findUrlCategories';
import { prepareCategoriesForUrl } from './prepareCategoriesForUrl';

export const createAdUrl = (categories: any[], category: number, id: string, title: string) => {
    const urlCategories = findUrlCategories(categories, category);
    const preparedCategories = prepareCategoriesForUrl(urlCategories);
    const encodedTitle = encodeURI(title.replaceAll(' ', '-'));
    return `${BASE_URL}/ad/${id}/${preparedCategories}/${encodedTitle}`;
};
