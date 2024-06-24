interface TypeActionTypes {
    ADD_PRODUCT: string;
    REMOVE_PRODUCT: string;
    INCREASE_PRODUCT_QUANTITY: string;
    DECREMENT_PRODUCT_QUANTITY: string;
}

const actionTypes: TypeActionTypes = {
    ADD_PRODUCT: "cart/addProduct",
    REMOVE_PRODUCT: "cart/removeProduct",
    INCREASE_PRODUCT_QUANTITY: "cart/increaseProductQuantity",
    DECREMENT_PRODUCT_QUANTITY: "cart/decrementProductQuantity",
}
export default actionTypes;