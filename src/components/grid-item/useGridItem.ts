import { useTranslation } from 'react-i18next';
import { IMainPageItem } from '../../dto/mainPageDto';
import { useAppSelector } from '../../redux/hooks';
import { createAdUrl } from '../../utils/createAdUrl';

export const useGridItem = (item: IMainPageItem) => {
    const { t } = useTranslation();
    const categoryTree = useAppSelector((state) => state.categoryTree.tree);
    const {
        category,
        id,
        title,
        country_name,
        place,
        attributes,
        description,
        listing_type_name,
        default_image,
        currency_name,
        price_formatted,
        converted_price_formatted,
        price_by_agreement,
        measurement_unit_name,
        owner_nickname,
        owner_name,
        create_date_formatted,
        view_count,
    } = item;
    const adUrl = createAdUrl(categoryTree, category, id, title);
    const placeText = [country_name, place].filter(Boolean).join(', ');
    const priorityAttributes = createPriorityAttributesStr(attributes);
    const itemDescription = createDescription(description);

    const trimmedItemDescription =
        itemDescription.length > 500 ? itemDescription.substring(0, 500) + '...' : itemDescription;

    return {
        adUrl,
        placeText,
        priorityAttributes,
        trimmedItemDescription,
        listing_type_name,
        default_image,
        title,
        id,
        itemDescription,
        currency_name,
        price_formatted,
        converted_price_formatted,
        price_by_agreement,
        measurement_unit_name,
        owner_nickname,
        owner_name,
        create_date_formatted,
        view_count,
        t,
    };
};

const createPriorityAttributesStr = (attributes: any[]) => {
    const isMetricSystem = true;
    const strArr = attributes.map((attribute) => {
        const { value_formatted, measurement_unit_name, additional_measurement_units } = attribute;
        const [value, unit] = getValueAndUnit(
            value_formatted,
            measurement_unit_name,
            additional_measurement_units,
            isMetricSystem
        );
        let s = value;
        if (unit !== null && unit !== undefined) {
            s += ' ' + unit;
        }
        return s;
    });
    return strArr.join('; ');
};

const getValueAndUnit = (
    value_formatted: any,
    measurement_unit_name: any,
    additional_measurement_units: any[],
    isMetricSystem: any
) => {
    if (additional_measurement_units.length === 0) {
        return [value_formatted, measurement_unit_name];
    }
    const additionalMeasurementUnit = additional_measurement_units.find(
        ({ metric_system }) => metric_system === isMetricSystem
    );
    const { value_formatted: value_formatted2, name } = additionalMeasurementUnit || {};
    return [value_formatted2, name];
};

const createDescription = (description: string) => {
    const container = document.createElement('div');
    container.innerHTML = description;
    const elements = container.childNodes;
    const textElements = [];
    for (let element of elements as any) {
        let text = '';
        if (element.tagName === 'UL') {
            const innerElements = element.childNodes;
            let innerTextElements = [];
            for (let innerElement of innerElements) {
                const innerText = innerElement.textContent || innerElement.innerText || null;
                if (innerText !== null && innerText.length !== 0) {
                    innerTextElements.push(innerText);
                }
            }
            text = innerTextElements.join(' ');
        } else {
            text = element.textContent || element.innerText || null;
        }
        if (text !== null && text.length !== 0) {
            textElements.push(text);
        }
    }
    return textElements.join(' ');
};
