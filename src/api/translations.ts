import { ApiService } from '.';

export const getTranslations = async (language: string) => {
    const query = { language };
    return ApiService<any>('GET', 'ui_language_data', query);
};
