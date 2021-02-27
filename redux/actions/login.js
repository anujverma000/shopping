export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


//Action Creator
export const login = ({username}) => ({
   type: LOGIN,
   payload: {username}
});

export const logout = () => ({
    type: LOGOUT
});
