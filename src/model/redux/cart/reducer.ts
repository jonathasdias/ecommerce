import actionTypes from "./actionTypes"
import ProductDeatils from "../../@types/TypeProductDetails"

interface TypeInitialState {
    products: ProductDeatils[],
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

const cartReducer = (state: TypeInitialState = initialState, action:Action): TypeInitialState => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        default:
            return state;
    }
}
export default cartReducer;