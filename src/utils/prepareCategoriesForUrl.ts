export const prepareCategoriesForUrl = (categories: any[]) => {
    return categories.map((category) => category.toLowerCase().trim().split(' ').join('-')).join('/');
};
