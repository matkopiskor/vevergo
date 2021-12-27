import { ApiService } from '.';

export const getCategoryMeasurementUnits = async (category: number) => {
    const url = 'category_measurement_units/' + category;
    return ApiService<any>('GET', url);
};
