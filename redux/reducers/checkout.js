import {
  UPDATE_USER_DETAILS,
  UPDATE_PAYMENT_DETAILS,
} from "../actions/checkout";

const initialState = {
  userDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  },
  paymentDetails: {
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  },
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case UPDATE_PAYMENT_DETAILS:
      return { ...state, paymentDetails: action.payload };
    default:
      return { ...state };
  }
};

export default login;
