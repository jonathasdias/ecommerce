export interface ProductType {
    id: string;
    title: string;
    price: number;
    original_price: number;
    available_quantity: number;
    thumbnail: string;
    permalink: string;
    condition: string;
}

export interface PagingType {
    total: number
}

interface FilterValue {
    id?: string;
    name?: string;
    results?: number;
}

export interface Filters {
    id: string;
    name: string;
    type: 'number' | 'range' | 'boolean' | 'text' | 'list' | 'STRING';
    values: FilterValue[];
}

export default interface ApiResponse {
    available_filters: Filters[];
    paging: PagingType;
    results: ProductType[];
}