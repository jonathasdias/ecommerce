import actionTypes from "./actionTypes"
import ProductDetails from "../../@types/TypeProductDetails"

interface TypeInitialState {
    products: ProductDetails[],
    productsTotalPrice: number
}

const initialState: TypeInitialState = {
    products: [],
    productsTotalPrice: 0
}

interface Action {
    type: string;
    payload?: any;
}

const cartReducer = (state: TypeInitialState = initialState, action: Action): TypeInitialState => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            const productExistsInCart: boolean = state.products.some(product => product.id === action.payload.id);

            if (!productExistsInCart) {
                return {...state, products: [...state.products, {...action.payload, quantity: 1}]}
            }
            return state;

        case actionTypes.REMOVE_PRODUCT:
            return { ...state, products: state.products.filter(product => product.id !== action.payload.id)}

        case actionTypes.INCREASE_PRODUCT_QUANTITY:

            const increaseQuantity = state.products.map(product => product.id === action.payload.id ?
                { ...product, quantity: (product.quantity ?? 0) < product.initial_quantity ? (product.quantity ?? 0) + 1 : product.initial_quantity} 
                : product)

            return { ...state, products: increaseQuantity}

        case actionTypes.DECREMENT_PRODUCT_QUANTITY:

            const decrementQuantity = state.products.map(product => product.id === action.payload.id ?
                { ...product, quantity: (product.quantity ?? 0) > 1  ? (product.quantity ?? 0) - 1 : 1} 
                : product)

            return { ...state, products: decrementQuantity}

        default:
            return state;
    }
}
export default cartReducer;