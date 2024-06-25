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

export default interface ApiResponse {
    paging: PagingType;
    results: ProductType[];
}