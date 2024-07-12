export default interface ProductDeatils {
    id: string;
    title: string;
    price: number;
    attributes: Attribute[];
    quantity?: number;
    category_id: string;
    condition: string;
    initial_quantity: number;
    original_price: number;
    permalink: string;
    pictures: Picture[];
    tags: string[];
    thumbnail: string;
    thumbnail_id: string;
    warranty: string;
}

export interface Attribute {
    id: string;
    name: string;
    value_name: string;
}

export interface Picture {
    id: string;
    url: string;
    secure_url: string;
}