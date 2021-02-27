import { UPDATE_PRODUCTS } from '../actions/cart';
import { EMPTY_CART } from '../actions/cart';

const initialState = { 
  products : []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      let prod = action.payload;
      // Adding the first product
      if(prod.quantity > 0 && state.products.length === 0 ) {
        return {...state, products: [prod]};  
      }else {
        // removing the prodcut by setting quantity to zero
        if(prod.quantity === 0){
          return {...state, products: state.products.filter(p => p.id !== prod.id)};  
        } else {
          //update or inset the new product
          let updatedProducts = state.products;
          var index = updatedProducts.findIndex(p => p.id === prod.id);
          if(index >= 0){
            updatedProducts[index] = prod;
          }else{
            updatedProducts.push(prod);
          }
          return {...state, products: updatedProducts};
        }
      }
    case EMPTY_CART: 
      return {...state, products: []};  
    default:
      return {...state};
  }
};

export default cart;