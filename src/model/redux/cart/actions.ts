import actionTypes from "./actionTypes";
import TypeProductDetails from '../../@types/TypeProductDetails'

export const addProductToCart = (payload:TypeProductDetails) => ({
    type: actionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload:TypeProductDetails) => ({
    type: actionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductQuantity = (payload:TypeProductDetails)=> ({
    type: actionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decrementProductQuantity = (payload:TypeProductDetails)=> ({
    type: actionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload,
})