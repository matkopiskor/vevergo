interface IMainPageItem {
    active: boolean;
    attributes: any[];
    category: number;
    category_name: string;
    change_date: string;
    change_date_formatted: string;
    converted_price: number;
    converted_price_formatted: string;
    country: number;
    country_name: string;
    create_date: string;
    create_date_formatted: string;
    currency: number;
    currency_name: string;
    default_image: string;
    description: string;
    expiry_date: string;
    expiry_date_formatted: string;
    id: string;
    images: string[];
    listing_type: number;
    listing_type_name: number;
    measurement_unit: any;
    measurement_unit_name: any;
    metric_system: any;
    owner: string;
    owner_city: any;
    owner_country: string;
    owner_email: string;
    owner_fax_number: string;
    owner_mobile_number: string;
    owner_name: string;
    owner_nickname: string;
    owner_phone_number: string;
    owner_type: number;
    owner_website: string;
    place: string;
    price: number;
    price_by_agreement: boolean;
    price_formatted: string;
    title: string;
    view_count: number;
}

interface IMainPageData {
    items: IMainPageItem[];
    total_count: number;
}

export type { IMainPageItem, IMainPageData };
