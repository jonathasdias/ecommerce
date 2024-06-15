import useFetch from "../../model/hooks/useFetch";
import { useParams } from "react-router-dom";

export interface Product {
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
    coverage_areas: any[]; // Defina o tipo correto se necessário
    date_created: string;
    deal_ids: string[];
    descriptions: any[]; // Defina o tipo correto se necessário
    domain_id: string;
    health: any; // Defina o tipo correto se necessário
    initial_quantity: number;
    international_delivery_mode: string;
    last_updated: string;
    listing_source: string;
    listing_type_id: string;
    location: any; // Defina o tipo correto se necessário
    non_mercado_pago_payment_methods: any[]; // Defina o tipo correto se necessário
    official_store_id: number;
    original_price: number;
    parent_item_id: string | null;
    permalink: string;
    pictures: Picture[];
    sale_terms: SaleTerm[];
    seller_address: SellerAddress;
    seller_contact: any; // Defina o tipo correto se necessário
    seller_id: number;
    shipping: Shipping;
    site_id: string;
    status: string;
    sub_status: any[]; // Defina o tipo correto se necessário
    tags: string[];
    thumbnail: string;
    thumbnail_id: string;
    variations: any[]; // Defina o tipo correto se necessário
    video_id: string | null;
    warranty: string;
}

export interface Attribute {
    // Defina os campos de cada atributo conforme necessário
    name: string;
    value_name: string;
}

export interface Picture {
    // Defina os campos de cada imagem conforme necessário
    id: string;
    url: string;
    secure_url: string;
}

export interface SaleTerm {
    // Defina os campos de cada termo de venda conforme necessário
    id: string;
    name: string;
    value_id: string | null;
    value_name: string | null;
}

export interface SellerAddress {
    // Defina os campos do endereço do vendedor conforme necessário
    city: LocationDetail;
    state: LocationDetail;
    country: LocationDetail;
    search_location: LocationDetail;
    id: number;
}

export interface LocationDetail {
    // Defina os campos detalhados da localização conforme necessário
    id: string;
    name: string;
}

export interface Shipping {
    mode: string;
    methods: any[]; // Defina o tipo correto se necessário
    tags: string[];
    dimensions: any; // Defina o tipo correto se necessário
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}
// Colocar tudo isso em types, criar uma pasta para productDetails.
// Colocar o tipo somante das informações que irei utilizar.

const ProductDetails: React.FC = () => {

    const { productId } = useParams();

    const { data, error, loading } = useFetch(`https://api.mercadolibre.com/items/${productId}`)

    if (loading) return <div className="p-4 text-2xl text-center">Carregando...</div>;
    if (error) return <div className="p-4 text-2xl text-center">{error}</div>;

    // Criar a interface moderna, olhar o swiper de slider de imagem com outras imagens do lado.

    console.log(data);

    return (
        <h1>
            Product Details
        </h1>
    )
}
export default ProductDetails;