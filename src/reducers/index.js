import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  detail: detailReducer,
  user: userReducer,
});

export default rootReducer;
