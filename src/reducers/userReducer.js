const initialState = {
  user: null,
  subscription: null,
  isLoading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload.user,
        subscription: null,
      };
    case "GET_SUBSCRIPTION":
      return {
        ...state,
        subscription: action.payload.subscription,
        isLoading: false,
      };
    case "LOADING_SUBSCRIPTION":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
