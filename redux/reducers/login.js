import { LOGIN, LOGOUT } from '../actions/login';

const initialState = {}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, username: action.payload.username};
    case LOGOUT:
      return initialState;
    default:
      return {...state};
  }
};

export default login;