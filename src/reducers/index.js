import { combineReducers } from "redux";
import favoriteReducers from "./favoriteReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  favoriteReducers,
  movieReducer,
});

export default rootReducer;
