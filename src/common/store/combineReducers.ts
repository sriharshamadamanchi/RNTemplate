import { combineReducers } from "redux";
import { loaderReducer } from "../loaderRedux/reducer";

export const reducers: any = combineReducers({
  loader:loaderReducer,
});
