import login from "./login";
import cart from "./cart";
import checkout from "./checkout";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login,
  cart,
  checkout,
});

export default rootReducer;
