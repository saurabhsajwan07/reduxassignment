const GET_USER_DATA = 'GET_USER_DATA';

const initialState = {
    post: '',
};

const getUserData = (id) => ({
    type: GET_USER_DATA,
    id,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, post: action.id };

    default:
      return state;
  }
};

export { getUserData, GET_USER_DATA };

export default userReducer;