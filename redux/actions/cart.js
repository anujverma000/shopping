export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const EMPTY_CART = 'EMPTY_CART';

//Action Creator
export const updateProducts = ({product}) => ({
  type: UPDATE_PRODUCTS,
  payload: product
});

export const emptyCart = () => ({
  type: EMPTY_CART
});