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

interface FilterValueType {
    id?: string;
    name?: string;
    results?: number;
}

export interface FiltersType {
    id: string;
    name: string;
    type: 'number' | 'range' | 'boolean' | 'text' | 'list' | 'STRING';
    values: FilterValueType[];
}

export default interface ApiResponseType {
    available_filters: FiltersType[];
    paging: PagingType;
    results: ProductType[];
}