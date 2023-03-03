import { combineReducers } from "redux";
import songReducer from "./Song/song.reducer";

const rootReducer = combineReducers({
  song: songReducer,
});

export default rootReducer;
