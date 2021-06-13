const initialState = {
  details: [],
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        details: action.payload.details,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
