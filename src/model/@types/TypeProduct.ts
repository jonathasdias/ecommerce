export interface ProductType {
    id: string;
    title: string;
    price: number;
    rating: number;
    category: string;
    description: string;
    discountPercentage: number;
    thumbnail: string;
    images: string[];
    minimumOrderQuantity: number;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    returnPolicy: string;
    stock: number;
    quantity?: number;
    reviews: Reviews[];
}

export interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Data {
    limit: number;
    products: ProductType[];
    skip: number;
    total: number;
}

type ApiResponseType = Data;
export default ApiResponseType;