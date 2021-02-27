export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';
export const UPDATE_PAYMENT_DETAILS = 'UPDATE_PAYMENT_DETAILS';

//Action Creator
export const updateUserDetails = (userDetails) => ({
  type: UPDATE_USER_DETAILS,
  payload: userDetails
});

export const updatePaymentDetails = (paymentDetails) => ({
  type: UPDATE_PAYMENT_DETAILS,
  payload: paymentDetails
});