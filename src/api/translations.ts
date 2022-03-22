import { ApiService } from '.';

export const getTranslations = async (language: string) => {
    const inputParams = { language };
    return ApiService<any>({ method: 'GET', url: 'ui_language_data', inputParams });
};
