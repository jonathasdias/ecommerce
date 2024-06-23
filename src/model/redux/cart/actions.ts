import actionTypes from "./actionTypes";
import TypeProductDetails from '../../@types/TypeProductDetails'

export const addProductToCart = (payload:TypeProductDetails) => ({
    type: actionTypes.ADD_PRODUCT,
    payload,
})