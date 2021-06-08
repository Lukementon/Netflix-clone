const initialState = {
  banner: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BANNER":
      return {
        ...state,
        banner: action.payload.banner,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
