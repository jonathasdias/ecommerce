import actionTypes from "./actionTypes";
import { ProductType } from "@/model/@types/TypeProduct";

export const addProductToCart = (payload:ProductType) => ({
    type: actionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload:ProductType) => ({
    type: actionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductQuantity = (payload:ProductType) => ({
    type: actionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decrementProductQuantity = (payload:ProductType) => ({
    type: actionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload,
})