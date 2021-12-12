interface AutocompleteOption {
    category: number;
    category_name: string;
    entity_type: number;
    parent_category: number;
    parent_category_name: string;
    title: string;
};

interface AutocompleteData {
    items: AutocompleteOption[];
    total_count: number;
};

export type { AutocompleteOption, AutocompleteData };