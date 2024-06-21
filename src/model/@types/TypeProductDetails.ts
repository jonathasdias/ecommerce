export default interface ProductDeatils {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    accepts_mercadopago: boolean;
    attributes: Attribute[];
    automatic_relist: boolean;
    base_price: number;
    buying_mode: string;
    catalog_listing: boolean;
    catalog_product_id: string;
    category_id: string;
    condition: string;
    coverage_areas: any[];
    date_created: string;
    deal_ids: string[];
    descriptions: any[];
    domain_id: string;
    health: any;
    initial_quantity: number;
    international_delivery_mode: string;
    last_updated: string;
    listing_source: string;
    listing_type_id: string;
    location: any;
    non_mercado_pago_payment_methods: any[];
    official_store_id: number;
    original_price: number;
    parent_item_id: string | null;
    permalink: string;
    pictures: Picture[];
    sale_terms: SaleTerm[];
    seller_address: SellerAddress;
    seller_contact: any;
    seller_id: number;
    shipping: Shipping;
    site_id: string;
    status: string;
    sub_status: any[];
    tags: string[];
    thumbnail: string;
    thumbnail_id: string;
    variations: any[];
    video_id: string | null;
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

export interface SaleTerm {
    id: string;
    name: string;
    value_id: string | null;
    value_name: string | null;
}

export interface SellerAddress {
    city: LocationDetail;
    state: LocationDetail;
    country: LocationDetail;
    search_location: LocationDetail;
    id: number;
}

export interface LocationDetail {
    id: string;
    name: string;
}

export interface Shipping {
    mode: string;
    methods: any[];
    tags: string[];
    dimensions: any;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}