const initialUserState = {
  auth: false,
  token: '',
  id: '',
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return state;
    default:
      return state;
  }
};

export default userReducer;
