const initialState = {
  banner: {},
  originals: [],
  trending: [],
  topRated: [],
  action: [],
  comedy: [],
  horror: [],
  romance: [],
  documentary: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BANNER":
      return {
        ...state,
        banner: action.payload.banner,
      };
    case "FETCH_MOVIES":
      return {
        ...state,
        originals: action.payload.originals,
        trending: action.payload.trending,
        topRated: action.payload.topRated,
        action: action.payload.action,
        comedy: action.payload.comedy,
        horror: action.payload.horror,
        romance: action.payload.romance,
        documentary: action.payload.documentary,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
